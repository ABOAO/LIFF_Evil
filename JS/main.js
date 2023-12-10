async function sendShare_Gift() {
    name = await liff.getProfile().then((profile) => {
        return profile.displayName;
    }).catch((err) => {
        return err;
    });

    const result = await liff.shareTargetPicker([
        {
            "type": "flex",
            "altText": name + "送禮物來囉!",
            "contents": {
                "type": "bubble",
                "size": "kilo",
                "hero": {
                    "type": "image",
                    "url": "https://img.onl/olwxWE",
                    "size": "full",
                    "aspectRatio": "18:19",
                    "action": {
                        "type": "uri",
                        "label": "action",
                        "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E5%96%9C%E6%AD%A1%E4%BD%A0%20%E8%B7%9F%E6%88%91%E4%BA%A4%E5%BE%80%E5%A5%BD%E3%84%87%20%3E%3C"
                    },
                    "offsetTop": "none",
                    "offsetBottom": "none",
                    "offsetStart": "none",
                    "margin": "none",
                    "align": "center",
                    "aspectMode": "cover"
                },
                "body": {
                    "type": "box",
                    "layout": "horizontal",
                    "spacing": "none",
                    "action": {
                        "type": "uri",
                        "label": "action",
                        "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E5%96%9C%E6%AD%A1%E4%BD%A0%20%E8%B7%9F%E6%88%91%E4%BA%A4%E5%BE%80%E5%A5%BD%E3%84%87%20%3E%3C"
                    },
                    "contents": [
                        {
                            "type": "image",
                            "url": "https://img.onl/pNQsvU",
                            "align": "start",
                            "size": "md",
                            "offsetTop": "none",
                            "offsetBottom": "none",
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E5%96%9C%E6%AD%A1%E4%BD%A0%20%E8%B7%9F%E6%88%91%E4%BA%A4%E5%BE%80%E5%A5%BD%E3%84%87%20%3E%3C"
                            },
                            "offsetStart": "none",
                            "position": "relative",
                            "offsetEnd": "none"
                        },
                        {
                            "type": "text",
                            "text": "【星巴克】大杯芝麻杏仁豆腐星冰樂即享券",
                            "size": "md",
                            "weight": "bold",
                            "margin": "none",
                            "align": "start",
                            "offsetTop": "xxl",
                            "contents": [],
                            "style": "normal",
                            "offsetEnd": "none",
                            "wrap": true,
                            "offsetBottom": "none",
                            "offsetStart": "none",
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E5%96%9C%E6%AD%A1%E4%BD%A0%20%E8%B7%9F%E6%88%91%E4%BA%A4%E5%BE%80%E5%A5%BD%E3%84%87%20%3E%3C"
                            },
                            "position": "relative"
                        }
                    ],
                    "margin": "none",
                    "offsetTop": "none",
                    "position": "relative",
                    "offsetStart": "none",
                    "offsetEnd": "none",
                    "offsetBottom": "none"
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "color": "#EEE9E9",
                            "margin": "none",
                            "action": {
                                "type": "uri",
                                "label": "打開我的禮物",
                                "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E5%96%9C%E6%AD%A1%E4%BD%A0%20%E8%B7%9F%E6%88%91%E4%BA%A4%E5%BE%80%E5%A5%BD%E3%84%87%20%3E%3C"
                            },
                            "style": "secondary"
                        },
                        {
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "傳送感謝小卡",
                                "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E5%96%9C%E6%AD%A1%E4%BD%A0%20%E8%B7%9F%E6%88%91%E4%BA%A4%E5%BE%80%E5%A5%BD%E3%84%87%20%3E%3C"
                            }
                        },
                        {
                            "type": "separator"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "button",
                                    "action": {
                                        "type": "uri",
                                        "label": "LINE禮物",
                                        "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E5%96%9C%E6%AD%A1%E4%BD%A0%20%E8%B7%9F%E6%88%91%E4%BA%A4%E5%BE%80%E5%A5%BD%E3%84%87%20%3E%3C"
                                    },
                                    "position": "relative",
                                    "margin": "none",
                                    "height": "sm",
                                    "style": "link",
                                    "offsetTop": "none",
                                    "offsetStart": "none",
                                    "offsetEnd": "none"
                                }
                            ],
                            "action": {
                                "type": "uri",
                                "label": "action",
                                "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E5%96%9C%E6%AD%A1%E4%BD%A0%20%E8%B7%9F%E6%88%91%E4%BA%A4%E5%BE%80%E5%A5%BD%E3%84%87%20%3E%3C"
                            }
                        }
                    ]
                }
            }
        }
    ])
    if (result) {
        alert(`[${result.status}] Message sent!`)
    } else {
        const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

        if (minorVer === undefined) {
            alert('ShareTargetPicker was canceled in external browser')
            return
        }

        if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
            alert('ShareTargetPicker was canceled in LINE app')
        }
    }
}

async function sendShare_Ladder() {
    name = await liff.getProfile().then((profile) => {
        return profile.displayName;
    }).catch((err) => {
        return err;
    });

    const result = await liff.shareTargetPicker([
        {
            "type": "flex",
            "altText": "爬梯子遊戲已建立，讓梯子決定您的命運吧！",
            "contents": {
                "type": "bubble",
                "size": "kilo",
                "hero": {
                    "type": "image",
                    "url": "https://img.onl/qCFiCL",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "action": {
                        "type": "uri",
                        "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E7%A5%9D%E5%A4%A7%E5%AE%B6520%E5%BF%AB%E6%A8%82%21"
                    }
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "爬梯子",
                            "weight": "bold",
                            "size": "md"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "margin": "md",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "我建立了一個爬梯子遊戲，馬上來看看結果吧！",
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "sm",
                                    "offsetEnd": "none",
                                    "offsetStart": "none",
                                    "offsetBottom": "none",
                                    "offsetTop": "none",
                                    "flex": 5
                                }
                            ]
                        }
                    ],
                    "action": {
                        "type": "uri",
                        "label": "action",
                        "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E7%A5%9D%E5%A4%A7%E5%AE%B6520%E5%BF%AB%E6%A8%82%21"
                    }
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "separator",
                            "margin": "none"
                        },
                        {
                            "type": "button",
                            "style": "link",
                            "height": "sm",
                            "action": {
                                "type": "uri",
                                "label": "開啟爬梯子遊戲",
                                "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=image&downloadUrl=https://i.imgur.com/vASFvRY.jpg&previewUrl=https://i.imgur.com/vASFvRY.jpg"
                            }
                        },
                        {
                            "type": "button",
                            "style": "link",
                            "height": "sm",
                            "action": {
                                "type": "uri",
                                "label": "查看全部結果",
                                "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=image&downloadUrl=https://i.imgur.com/ymZGzJT.jpg&previewUrl=https://i.imgur.com/ymZGzJT.jpg"
                            }
                        },
                        {
                            "type": "separator"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "margin": "sm"
                        }
                    ],
                    "flex": 0,
                    "margin": "none",
                    "paddingTop": "none"
                }
            }
        }
    ])
    if (result) {
        alert(`[${result.status}] Message sent!`)
    } else {
        const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

        if (minorVer === undefined) {
            alert('ShareTargetPicker was canceled in external browser')
            return
        }

        if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
            alert('ShareTargetPicker was canceled in LINE app')
        }
    }
}

async function sendShare_Pay() {
    name = await liff.getProfile().then((profile) => {
        return profile.displayName;
    }).catch((err) => {
        return err;
    });
    const result = await liff.shareTargetPicker([
        {
            "type": "flex",
            "altText": "已收到NT$ 520的轉帳。",
            "contents": {
                  "type": "bubble",
                  "size": "hecto",
                  "hero": {
                    "type": "image",
                    "url": "https://i.imgur.com/j5VkCxE.png",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "action": {
                      "type": "uri",
                      "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E8%B6%85%E7%AC%A8%20%E6%B4%BB%E8%A9%B2%E8%A2%AB%E9%A8%99"
                    },
                    "position": "relative"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "text": "LINE Pay",
                        "weight": "bold",
                        "size": "xs",
                        "action": {
                          "type": "uri",
                          "label": "action",
                          "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E8%B6%85%E7%AC%A8%20%E6%B4%BB%E8%A9%B2%E8%A2%AB%E9%A8%99"
                        }
                      },
                      {
                        "type": "text",
                        "text": "您已收到 NT$ 1000。（來自："+ name +"）",
                        "size": "xs",
                        "contents": [],
                        "color": "#8E8E8E",
                        "action": {
                          "type": "uri",
                          "label": "action",
                          "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E8%B6%85%E7%AC%A8%20%E6%B4%BB%E8%A9%B2%E8%A2%AB%E9%A8%99"
                        }
                      },
                      {
                        "type": "button",
                        "position": "relative",
                        "style": "secondary",
                        "height": "sm",
                        "margin": "lg",
                        "color": "#F0F0F0",
                        "action": {
                          "type": "uri",
                          "label": "瞭解更多",
                          "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E8%B6%85%E7%AC%A8%20%E6%B4%BB%E8%A9%B2%E8%A2%AB%E9%A8%99"
                        },
                        "scaling": true,
                        "offsetEnd": "none"
                      }
                    ],
                    "action": {
                      "type": "uri",
                      "label": "action",
                      "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E8%B6%85%E7%AC%A8%20%E6%B4%BB%E8%A9%B2%E8%A2%AB%E9%A8%99"
                    }
                  },
                  "footer": {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "icon",
                        "url": "https://i.imgur.com/LriSrg0.png",
                        "margin": "none",
                        "size": "xs",
                        "scaling": true,
                        "offsetTop": "xs"
                      },
                      {
                        "type": "text",
                        "text": "LINE Pay",
                        "margin": "sm",
                        "size": "xxs",
                        "color": "#8E8E8E"
                      },
                      {
                        "type": "icon",
                        "url": "https://i.imgur.com/aKbXQ9D.png",
                        "margin": "sm",
                        "size": "xxs",
                        "offsetTop": "xs"
                      }
                    ],
                    "action": {
                      "type": "uri",
                      "label": "action",
                      "uri": "https://liff.line.me/1657022499-njBkN1k3?auto=yes&type=text&text=%E6%88%91%E8%B6%85%E7%AC%A8%20%E6%B4%BB%E8%A9%B2%E8%A2%AB%E9%A8%99"
                    },
                    "position": "relative"
                  },
                  "styles": {
                    "footer": {
                      "separator": true
                    }
                  }
                }
        }
    ])
    if (result) {
        alert(`[${result.status}] Message sent!`)
    } else {
        const [majorVer, minorVer, patchVer] = (liff.getLineVersion() || "").split('.');

        if (minorVer === undefined) {
            alert('ShareTargetPicker was canceled in external browser')
            return
        }

        if (parseInt(majorVer) >= 10 && parseInt(minorVer) >= 10 && parseInt(patchVer) > 0) {
            alert('ShareTargetPicker was canceled in LINE app')
        }
    }
}

function logOut() {
    liff.logout()
    window.location.reload()
}

async function main() {
    await liff.init({ liffId: "1657615367-ndLPQL1p" })
    if (liff.isLoggedIn()) {
        document.getElementById("btnShare").style.display = "block"
        document.getElementById("btnShare2").style.display = "block"
        document.getElementById("btnShare3").style.display = "block"
        if (!liff.isInClient()) {
            document.getElementById("btnLogOut").style.display = "block"
        }
    } else {
        document.getElementById("btnLogin").style.display = "block"
    }
}
main();