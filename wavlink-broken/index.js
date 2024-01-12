var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ethers } from 'ethers';
import * as fs from 'fs';
import { WaveFile } from 'wavefile';
class Wavlink {
    constructor({ env, custom } = { env: 'standard', custom: [] }) {
        this.peaks = [];
        if (custom) {
            this.networks = custom;
        }
        else if (env == 'standard') {
            this.networks = [
                'mainnet',
                'polygon',
                'polygon-zkevm',
                'arbitrum',
                'arbitrum-nova',
                'optimism',
                'bsc',
                'avalanche',
                'base',
                'goerli',
                'sepolia',
                'mumbai',
                'arbitrum-goerli',
                'base-goerli',
                'bsc-testnet'
            ];
        }
        else if (env == 'alphanumeric') {
            this.networks = ([
                'mainnet',
                'polygon',
                'polygon-zkevm',
                'arbitrum',
                'arbitrum-nova',
                'optimism',
                'bsc',
                'avalanche',
                'base',
                'goerli',
                'sepolia',
                'mumbai',
                'arbitrum-goerli',
                'base-goerli',
                'bsc-testnet'
            ]).sort();
        }
        else if (env == 'ratchet') {
            this.networks = [
                'goerli',
                'sepolia',
                'mumbai',
                'arbitrum-goerli',
                'base-goerli',
                'bsc-testnet'
            ];
        }
        else if (env == 'surfer') {
            this.networks = [
                'avalanche',
                'base',
            ];
        }
        else if (env == 'goerli') {
            this.networks = [
                'goerli',
                'arbitrum-goerli',
                'base-goerli',
            ];
        }
        else if (env == 'L1') {
            this.networks = [
                'mainnet',
                'bsc',
                'avalanche',
                'base',
                'goerli'
            ];
        }
        else if (env == 'L2') {
            this.networks = [
                'polygon',
                'polygon-zkevm',
                'arbitrum',
                'arbitrum-nova',
                'optimism',
            ];
        }
        else if (env == 'mecha') {
            this.networks = [
                'polygon-zkevm',
                'arbitrum-nova',
                'base',
                'bsc'
            ];
        }
        // recipes!
        else {
            this.networks = [
                'mainnet'
            ];
        }
    }
    getLatestBlockNumber(chain, memeCount) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = new ethers.providers.JsonRpcProvider(`https://nodes.sequence.app/${chain}`); // Replace with your Infura project ID or your own Ethereum node URL
            let startTime, endTime;
            try {
                startTime = new Date();
                const blockNumber = yield provider.getBlockNumber();
                endTime = new Date();
                return Math.round(endTime - startTime) % memeCount;
            }
            catch (error) {
                console.error('Error getting block number:', error);
            }
        });
    }
    extractPeaks(waveFile, n = 10, neighborhood = 5) {
        console.log('parsing audio file...');
        const samples = waveFile.getSamples(true, Int16Array);
        const peaks = [];
        for (let i = neighborhood; i < samples.length - neighborhood; i++) {
            const before = samples.slice(i - neighborhood, i);
            const after = samples.slice(i + 1, i + 1 + neighborhood);
            const isPeak = samples[i] > Math.max(...before) && samples[i] > Math.max(...after);
            if (isPeak) {
                peaks.push({ index: i, amplitude: samples[i] });
                i += neighborhood; // Skip the neighborhood after detecting a peak
            }
        }
        const topPeaks = peaks.sort((a, b) => b.amplitude - a.amplitude).slice(0, n);
        // Extracting valleys (lowest volumes) between peaks
        // for (let i = 0; i < topPeaks.length - 1; i++) {
        //     const currentPeak = topPeaks[i];
        //     const nextPeak = topPeaks[i + 1];
        //     // console.log(currentPeak)
        //     // console.log(nextPeak)
        //     const sliceBetweenPeaks = samples.slice(currentPeak.index, nextPeak.index);
        //     // console.log(sliceBetweenPeaks)
        //     const minValue = Math.min(...sliceBetweenPeaks); // res <- Breaks.min()
        //     const relativeIndex = sliceBetweenPeaks.indexOf(minValue);
        //     const valleyIndex = currentPeak.index + relativeIndex;
        //     // console.log(valleyIndex)
        //     valleyIndices.push(valleyIndex);
        //     // valleyValues.push(minValue);
        // }
        const sampleRate = waveFile.fmt.sampleRate;
        const timestamps = topPeaks.map(peak => peak.index / sampleRate);
        const lazywave = [...timestamps];
        const timeDifferences = [];
        for (let i = 0; i < timestamps.length - 1; i++) {
            timeDifferences.push(lazywave[i + 1] - lazywave[i]);
        }
        return timeDifferences;
    }
    wait(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res) => { setTimeout(res, ms); });
        });
    }
    isRandom(numbers, tolerance = 0.05) {
        let counts = {};
        let uniqueNumbers = [...new Set(numbers)];
        for (let num of numbers) {
            if (counts[num]) {
                counts[num]++;
            }
            else {
                counts[num] = 1;
            }
        }
        let avgCount = numbers.length / uniqueNumbers.length;
        for (let num of uniqueNumbers) {
            if (Math.abs(counts[num] - avgCount) > tolerance * avgCount) {
                return false; // Too much deviation from expected average count
            }
        }
        return true;
    }
    entropy(sequence) {
        let frequency = {};
        let len = sequence.length;
        for (let num of sequence) {
            if (frequency[num]) {
                frequency[num]++;
            }
            else {
                frequency[num] = 1;
            }
        }
        let entropy = 0;
        for (let freq in frequency) {
            let p = frequency[freq] / len;
            entropy -= p * Math.log2(p);
        }
        return entropy;
    }
    sequence({ length, memeCount, audio }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (audio) {
                if (this.peaks.length == 0) {
                    const wavBuffer = fs.readFileSync('./adaptive_biotechnology.wav');
                    const waveFile = new WaveFile(wavBuffer);
                    this.peaks = this.extractPeaks(waveFile, memeCount);
                }
                const intelligence = [];
                let indexComplete = true;
                let startTime, endTime;
                let i = 0;
                while (indexComplete) {
                    const time = yield this.getLatestBlockNumber(this.networks[i % this.networks.length], memeCount);
                    intelligence.push(time);
                    yield this.wait(this.peaks[i] * 10);
                    i++;
                    if (i >= length)
                        indexComplete = false;
                }
                return intelligence;
            }
            else {
                let intelligence = [];
                let indexComplete = true;
                let startTime, endTime;
                let i = 0;
                const promises = [];
                while (indexComplete) {
                    promises.push(this.getLatestBlockNumber(this.networks[i % this.networks.length], memeCount));
                    i++;
                    if (i >= length)
                        indexComplete = false;
                }
                const results = yield Promise.all(promises);
                intelligence = results;
                return intelligence;
            }
        });
    }
}
export { Wavlink };
