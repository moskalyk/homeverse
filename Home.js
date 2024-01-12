import { v5_callFunction as callFunction$$, v5_registerService as registerService$$, } from '@fluencelabs/js-client.api';
export function registerHomeService(...args) {
    registerService$$(args, {
        "defaultServiceId": "HomeService",
        "functions": {
            "tag": "labeledProduct",
            "fields": {
                "bathroom": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "chores": {
                                "tag": "array",
                                "type": {
                                    "tag": "struct",
                                    "name": "Chore",
                                    "fields": {
                                        "name": {
                                            "tag": "scalar",
                                            "name": "string"
                                        }
                                    }
                                }
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "closet": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "chores": {
                                "tag": "array",
                                "type": {
                                    "tag": "struct",
                                    "name": "Chore",
                                    "fields": {
                                        "name": {
                                            "tag": "scalar",
                                            "name": "string"
                                        }
                                    }
                                }
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "diningRoom": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "chores": {
                                "tag": "array",
                                "type": {
                                    "tag": "struct",
                                    "name": "Chore",
                                    "fields": {
                                        "name": {
                                            "tag": "scalar",
                                            "name": "string"
                                        }
                                    }
                                }
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "frame": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "cid": {
                                "tag": "scalar",
                                "name": "string"
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "kitchen": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "chores": {
                                "tag": "array",
                                "type": {
                                    "tag": "struct",
                                    "name": "Chore",
                                    "fields": {
                                        "name": {
                                            "tag": "scalar",
                                            "name": "string"
                                        }
                                    }
                                }
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "livingRoom": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "chores": {
                                "tag": "array",
                                "type": {
                                    "tag": "struct",
                                    "name": "Chore",
                                    "fields": {
                                        "name": {
                                            "tag": "scalar",
                                            "name": "string"
                                        }
                                    }
                                }
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "radio": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "cid": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "register": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "spaces": {
                                "tag": "array",
                                "type": {
                                    "tag": "struct",
                                    "name": "Space",
                                    "fields": {
                                        "name": {
                                            "tag": "scalar",
                                            "name": "string"
                                        },
                                        "peer_id": {
                                            "tag": "scalar",
                                            "name": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "renovate": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "proposal": {
                                "tag": "struct",
                                "name": "Proposal",
                                "fields": {
                                    "ask": {
                                        "tag": "scalar",
                                        "name": "i64"
                                    },
                                    "description": {
                                        "tag": "scalar",
                                        "name": "string"
                                    },
                                    "name": {
                                        "tag": "scalar",
                                        "name": "string"
                                    },
                                    "outsource": {
                                        "tag": "scalar",
                                        "name": "bool"
                                    }
                                }
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "sublet": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "proposal": {
                                "tag": "struct",
                                "name": "Proposal",
                                "fields": {
                                    "ask": {
                                        "tag": "scalar",
                                        "name": "i64"
                                    },
                                    "description": {
                                        "tag": "scalar",
                                        "name": "string"
                                    },
                                    "name": {
                                        "tag": "scalar",
                                        "name": "string"
                                    },
                                    "outsource": {
                                        "tag": "scalar",
                                        "name": "bool"
                                    }
                                }
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                },
                "window": {
                    "tag": "arrow",
                    "domain": {
                        "tag": "labeledProduct",
                        "fields": {
                            "chores": {
                                "tag": "array",
                                "type": {
                                    "tag": "struct",
                                    "name": "Chore",
                                    "fields": {
                                        "name": {
                                            "tag": "scalar",
                                            "name": "string"
                                        }
                                    }
                                }
                            },
                            "peer_id": {
                                "tag": "scalar",
                                "name": "string"
                            }
                        }
                    },
                    "codomain": {
                        "tag": "unlabeledProduct",
                        "items": [
                            {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        ]
                    }
                }
            }
        }
    });
}
export function register(...args) {
    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                          (call %init_peer_id% ("getDataSrv" "spaces") [] spaces)
                         )
                         (call %init_peer_id% ("getDataSrv" "peer_id") [] peer_id)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call peer_id ("HomeService" "register") [spaces] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `;
    return callFunction$$(args, {
        "functionName": "register",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {
                    "spaces": {
                        "tag": "array",
                        "type": {
                            "tag": "struct",
                            "name": "Space",
                            "fields": {
                                "name": {
                                    "tag": "scalar",
                                    "name": "string"
                                },
                                "peer_id": {
                                    "tag": "scalar",
                                    "name": "string"
                                }
                            }
                        }
                    },
                    "peer_id": {
                        "tag": "scalar",
                        "name": "string"
                    }
                }
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "bool"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
export function setFrame(...args) {
    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                          (call %init_peer_id% ("getDataSrv" "cid") [] cid)
                         )
                         (call %init_peer_id% ("getDataSrv" "peer_id") [] peer_id)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call peer_id ("HomeService" "frame") [cid peer_id] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `;
    return callFunction$$(args, {
        "functionName": "setFrame",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {
                    "cid": {
                        "tag": "scalar",
                        "name": "string"
                    },
                    "peer_id": {
                        "tag": "scalar",
                        "name": "string"
                    }
                }
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "bool"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
export function sublet(...args) {
    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                          (call %init_peer_id% ("getDataSrv" "proposal") [] proposal)
                         )
                         (call %init_peer_id% ("getDataSrv" "peer_id") [] peer_id)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call peer_id ("HomeService" "sublet") [proposal peer_id] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `;
    return callFunction$$(args, {
        "functionName": "sublet",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {
                    "proposal": {
                        "tag": "struct",
                        "name": "Proposal",
                        "fields": {
                            "ask": {
                                "tag": "scalar",
                                "name": "i64"
                            },
                            "description": {
                                "tag": "scalar",
                                "name": "string"
                            },
                            "name": {
                                "tag": "scalar",
                                "name": "string"
                            },
                            "outsource": {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        }
                    },
                    "peer_id": {
                        "tag": "scalar",
                        "name": "string"
                    }
                }
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "bool"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
export function renovate(...args) {
    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                          (call %init_peer_id% ("getDataSrv" "proposal") [] proposal)
                         )
                         (call %init_peer_id% ("getDataSrv" "peer_id") [] peer_id)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call peer_id ("HomeService" "renovate") [proposal peer_id] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `;
    return callFunction$$(args, {
        "functionName": "renovate",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {
                    "proposal": {
                        "tag": "struct",
                        "name": "Proposal",
                        "fields": {
                            "ask": {
                                "tag": "scalar",
                                "name": "i64"
                            },
                            "description": {
                                "tag": "scalar",
                                "name": "string"
                            },
                            "name": {
                                "tag": "scalar",
                                "name": "string"
                            },
                            "outsource": {
                                "tag": "scalar",
                                "name": "bool"
                            }
                        }
                    },
                    "peer_id": {
                        "tag": "scalar",
                        "name": "string"
                    }
                }
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "bool"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
export function setRadio(...args) {
    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                          (call %init_peer_id% ("getDataSrv" "cid") [] cid)
                         )
                         (call %init_peer_id% ("getDataSrv" "peer_id") [] peer_id)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call peer_id ("HomeService" "radio") [cid] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `;
    return callFunction$$(args, {
        "functionName": "setRadio",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {
                    "cid": {
                        "tag": "scalar",
                        "name": "string"
                    },
                    "peer_id": {
                        "tag": "scalar",
                        "name": "string"
                    }
                }
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "bool"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
export function registerVia(...args) {
    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                            (call %init_peer_id% ("getDataSrv" "spaces") [] spaces)
                           )
                           (call %init_peer_id% ("getDataSrv" "relay_id") [] relay_id)
                          )
                          (call %init_peer_id% ("getDataSrv" "peer_id") [] peer_id)
                         )
                         (call -relay- ("op" "noop") [])
                        )
                        (call relay_id ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (seq
                          (call peer_id ("HomeService" "register") [spaces] res)
                          (call relay_id ("op" "noop") [])
                         )
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (seq
                          (call relay_id ("op" "noop") [])
                          (call -relay- ("op" "noop") [])
                         )
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `;
    return callFunction$$(args, {
        "functionName": "registerVia",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {
                    "spaces": {
                        "tag": "array",
                        "type": {
                            "tag": "struct",
                            "name": "Space",
                            "fields": {
                                "name": {
                                    "tag": "scalar",
                                    "name": "string"
                                },
                                "peer_id": {
                                    "tag": "scalar",
                                    "name": "string"
                                }
                            }
                        }
                    },
                    "relay_id": {
                        "tag": "scalar",
                        "name": "string"
                    },
                    "peer_id": {
                        "tag": "scalar",
                        "name": "string"
                    }
                }
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "bool"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
export function echo(...args) {
    let script = `
                    (xor
                     (seq
                      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [%init_peer_id%])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                    )
    `;
    return callFunction$$(args, {
        "functionName": "echo",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {}
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "string"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
export function controller(...args) {
    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                          (call %init_peer_id% ("getDataSrv" "action") [] action)
                         )
                         (call %init_peer_id% ("getDataSrv" "chores") [] chores)
                        )
                        (call %init_peer_id% ("getDataSrv" "peer_id") [] peer_id)
                       )
                       (new $result
                        (seq
                         (seq
                          (call -relay- ("op" "noop") [])
                          (xor
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (xor
                                 (match action 0
                                  (xor
                                   (call peer_id ("HomeService" "kitchen") [chores peer_id] $result)
                                   (seq
                                    (seq
                                     (call -relay- ("op" "noop") [])
                                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                                    )
                                    (call -relay- ("op" "noop") [])
                                   )
                                  )
                                 )
                                 (call peer_id ("op" "noop") [])
                                )
                                (xor
                                 (match action 1
                                  (xor
                                   (call peer_id ("HomeService" "livingRoom") [chores peer_id] $result)
                                   (seq
                                    (seq
                                     (call -relay- ("op" "noop") [])
                                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                                    )
                                    (call -relay- ("op" "noop") [])
                                   )
                                  )
                                 )
                                 (call peer_id ("op" "noop") [])
                                )
                               )
                               (xor
                                (match action 2
                                 (xor
                                  (call peer_id ("HomeService" "diningRoom") [chores peer_id] $result)
                                  (seq
                                   (seq
                                    (call -relay- ("op" "noop") [])
                                    (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                                   )
                                   (call -relay- ("op" "noop") [])
                                  )
                                 )
                                )
                                (call peer_id ("op" "noop") [])
                               )
                              )
                              (xor
                               (match action 3
                                (xor
                                 (call peer_id ("HomeService" "bathroom") [chores peer_id] $result)
                                 (seq
                                  (seq
                                   (call -relay- ("op" "noop") [])
                                   (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 4])
                                  )
                                  (call -relay- ("op" "noop") [])
                                 )
                                )
                               )
                               (call peer_id ("op" "noop") [])
                              )
                             )
                             (xor
                              (match action 4
                               (xor
                                (call peer_id ("HomeService" "closet") [chores peer_id] $result)
                                (seq
                                 (seq
                                  (call -relay- ("op" "noop") [])
                                  (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 5])
                                 )
                                 (call -relay- ("op" "noop") [])
                                )
                               )
                              )
                              (call peer_id ("op" "noop") [])
                             )
                            )
                            (xor
                             (match action 5
                              (xor
                               (seq
                                (call peer_id ("HomeService" "window") [chores peer_id] $result)
                                (call -relay- ("op" "noop") [])
                               )
                               (seq
                                (call -relay- ("op" "noop") [])
                                (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 6])
                               )
                              )
                             )
                             (seq
                              (seq
                               (call -relay- ("op" "noop") [])
                               (call peer_id ("op" "noop") [])
                              )
                              (call -relay- ("op" "noop") [])
                             )
                            )
                           )
                           (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 7])
                          )
                         )
                         (new $result_test
                          (seq
                           (seq
                            (seq
                             (call %init_peer_id% ("math" "add") [0 1] result_incr)
                             (fold $result result_fold_var
                              (seq
                               (seq
                                (ap result_fold_var $result_test)
                                (canon %init_peer_id% $result_test  #result_iter_canon)
                               )
                               (xor
                                (match #result_iter_canon.length result_incr
                                 (null)
                                )
                                (next result_fold_var)
                               )
                              )
                              (never)
                             )
                            )
                            (canon %init_peer_id% $result_test  #result_result_canon)
                           )
                           (ap #result_result_canon result_gate)
                          )
                         )
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [result_gate.$.[0]!])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 8])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 9])
                    )
    `;
    return callFunction$$(args, {
        "functionName": "controller",
        "arrow": {
            "tag": "arrow",
            "domain": {
                "tag": "labeledProduct",
                "fields": {
                    "action": {
                        "tag": "scalar",
                        "name": "i32"
                    },
                    "chores": {
                        "tag": "array",
                        "type": {
                            "tag": "struct",
                            "name": "Chore",
                            "fields": {
                                "name": {
                                    "tag": "scalar",
                                    "name": "string"
                                }
                            }
                        }
                    },
                    "peer_id": {
                        "tag": "scalar",
                        "name": "string"
                    }
                }
            },
            "codomain": {
                "tag": "unlabeledProduct",
                "items": [
                    {
                        "tag": "scalar",
                        "name": "bool"
                    }
                ]
            }
        },
        "names": {
            "relay": "-relay-",
            "getDataSrv": "getDataSrv",
            "callbackSrv": "callbackSrv",
            "responseSrv": "callbackSrv",
            "responseFnName": "response",
            "errorHandlingSrv": "errorHandlingSrv",
            "errorFnName": "error"
        }
    }, script);
}
/* eslint-enable */ 
