(() => {
  "use strict";
  var e,
    n,
    t,
    s,
    i,
    l = {
      1707: (e, n, t) => {
        t.d(n, { O: () => i });
        (t(17840), t(48983));
        const s = { "": "自动识别", "中文(简体)": "中文" };
        function i(e, n = "中文", t = "") {
          return `https://fanyi.qq.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${s[t] || t}&hcfy_to=${s[n] || n}`;
        }
      },
      3161: (e, n, t) => {
        t.d(n, { W: () => s });
        (t(61412), t(91883), t(70286));
        function s(e, n = "") {
          const t = URL.createObjectURL(e),
            s = document.createElement("a");
          return (
            (s.href = t),
            (s.download = n),
            document.documentElement.appendChild(s),
            s.click(),
            document.documentElement.removeChild(s),
            t
          );
        }
      },
      7276: (e, n, t) => {
        t.d(n, { M4: () => c, cN: () => d });
        (t(82738), t(61412), t(91883), t(70286));
        var s = t(29842),
          i = t(34843),
          l = t(20124);
        const r = t.n(l)()("hcfy:axiosForAPI");
        let a = (function (e) {
          return ((e.VIP_OUTDATED = "VIP_OUTDATED"), e);
        })({});
        let o = null;
        function c(e) {
          o = e;
        }
        function d(e, n, t) {
          const l = new URL(e, "https://hs-api.limingkai.cn/").toString(),
            { silent: c, ...d } = n || {},
            h = () => (c ? null : o);
          return (0, i.Z5)(l, d).then(
            async (e) => {
              const n = e.clone(),
                i = await n.text();
              let l;
              r("接口返回的数据（text 形式）", i);
              try {
                l = JSON.parse(i);
              } catch (o) {
                return (
                  console.error("将 API 响应转为 JSON 失败：", o),
                  t ? e : i
                );
              }
              if (((o = l), o?.isError)) {
                (r("接口的错误处理", l),
                  l.errorCode === a.VIP_OUTDATED &&
                    chrome.storage.local.set({ user: l.data }));
                const e = new s.Fw(l.message, { type: l.errorCode }),
                  n = h();
                if (n) return n(e);
                throw e;
              }
              var o;
              return t ? e : l;
            },
            (e) => {
              if ((0, i.NF)(e)) {
                const n = e.response?.status;
                if (304 === n) return t ? e.response : "";
                401 === n &&
                  chrome.storage.local.remove([
                    "user",
                    "optionsSyncAt",
                    "favoritesSyncAt",
                    "historiesSyncAt",
                  ]);
              }
              const n = h();
              return n ? n(e) : Promise.reject(e);
            },
          );
        }
      },
      10469: (e, n, t) => {
        t.d(n, { Z: () => i });
        const s = JSON.parse(
          '{"中文(简体)":"zh-CHS","英语":"en","日语":"ja","西班牙语":"es","阿拉伯语":"ar","法语":"fr","韩语":"ko","俄语":"ru","德语":"de","葡萄牙语":"pt","意大利语":"it","希腊语":"el","荷兰语":"nl","芬兰语":"fi","丹麦语":"da","越南语":"vi","印地语":"hi","印尼语":"id","马来语":"ms"}',
        );
        t(17840);
        function i(e, n = "", t = "") {
          const i = s[t],
            l = s[n];
          return i && l
            ? `https://fanyi.youdao.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${i}&hcfy_to=${l}`
            : `http://fanyi.youdao.com/#hcfy_text=${encodeURIComponent(e)}`;
        }
      },
      16224: (e, n, t) => {
        t.d(n, {
          Du: () => g,
          Ne: () => y,
          SM: () => p,
          g2: () => m,
          o0: () => j,
        });
        (t(81045), t(84915));
        var s = t(94903),
          i = t(18785),
          l = t(54712),
          r = t(20551),
          a = t(86045),
          o = t(19235),
          c = t(38251),
          d = t(50657),
          h = t(49726),
          x = t(37721),
          u = t(7634);
        let p = (function (e) {
            return (
              (e.it = "it"),
              (e.finance = "finance"),
              (e.machinery = "machinery"),
              (e.senimed = "senimed"),
              (e.novel = "novel"),
              (e.academic = "academic"),
              (e.aerospace = "aerospace"),
              (e.wiki = "wiki"),
              (e.news = "news"),
              (e.law = "law"),
              (e.contract = "contract"),
              e
            );
          })({}),
          g = (function (e) {
            return (
              (e.title = "title"),
              (e.description = "description"),
              (e.communication = "communication"),
              (e.medical = "medical"),
              (e.social = "social"),
              (e.finance = "finance"),
              e
            );
          })({}),
          j = (function (e) {
            return ((e.ctrlEnter = "ctrl-enter"), (e.enter = "enter"), e);
          })({});
        const m = {
            multiClick: "close",
            button: !0,
            buttonAutoClose: !0,
            buttonHover: !1,
            buttonOffsetTop: 0,
            buttonOffsetLeft: 0,
            closeAfterMove: !1,
            charsLimit: 0,
            disableInTextarea: !1,
            domainBlackList: [],
            domainWhiteList: [],
            textList: [
              {
                name: "忽略中文",
                readonly: !0,
                enabled: !1,
                value: "[\\u4e00-\\u9fa5]",
                description:
                  "如果划选的文本当中包含中文，则不显示翻译按钮或翻译结果。",
              },
              {
                name: "忽略字符",
                readonly: !0,
                enabled: !0,
                value: "^[\\s.\\-0-9()•+]+$",
                description:
                  "如果划选的文本全部都是由数字、点、括号、空格、横线、加号和圆点（即 •，多用于密码框）组成的，则不显示翻译按钮或翻译结果。",
              },
            ],
            placement: "bottom",
            pin: !1,
            pinAfterDrag: !1,
            pinPos: null,
            pinEnhance: !0,
            pinIgnoreDomainList: !0,
            darkMode: "system",
            pdfAuto: !1,
            pdfSnifferEnable: !0,
            pdfStandalone: !1,
            width: 290,
            source: "",
            destination: "中文(简体)",
            secondDestination: "英语",
            secondDestinationLatestSource: !1,
            showTextArea: !1,
            textAreaAuto: !1,
            textAreaShortKey: j.enter,
            selectedAPIs: ["Microsoft", "Bing", "DeepLWeb", "BingDictWeb"],
            collapsedAPIs: [],
            selectedExternalLinks: [],
            autoClipboard: null,
            autoClipboardImage: null,
            autoPlay: !1,
            autoCopy: !1,
            autoPaste: !0,
            recentUseLangFrom: [""],
            recentUseLangTo: ["中文(简体)"],
            tipPanelSettingsClosed: !1,
            tipBlockedPDFClosed: !1,
            tipIncognitoPDFClosed: !1,
            tipOcrChangeClosed: !0,
            tipForeverVIPClosed: !0,
            tipQuickLinksClosed: !1,
            tipNewProfessionalClosed: !1,
            tipTextareaBtnClosed: !0,
            tipForSTTClosed: !1,
            tipForPinAfterDragClosed: !0,
            tipForPageTrsNoLoadingClosed: !0,
            tipForSlowDeepLPageTrsClosed: !1,
            tipForPageTrsClosed: !1,
            panelPos: { width: 270, height: 500, left: 100, top: 100 },
            panelFocus: !0,
            panelSize: "small",
            panelButtons: ["media", "microphone"],
            panelCustomStyle: "",
            notifySyncOptions: !0,
            sourceTransformNoBr: !1,
            sourceTransformNCaml: !1,
            sourceTransformNoComment: !1,
            sourceLower: !1,
            sourceTransformRegExps: [],
            historyEnabled: !1,
            favoritesEnabled: !0,
            modifierKeys: [],
            modifierKeyPressedAction: "",
            modifierKeyTranslate: !1,
            modifierKeyLink: !1,
            audioVolume: 100,
            audioRate: 1,
            systemTTS: "aid",
            systemTTSAccent: {},
            systemTTSVoice: {},
            localOCR: { lang: "eng" },
            pageTrsApi: "Microsoft",
            pageTrsHighlight: !0,
            pageTrsResultStyleId: "STYLE_LINE",
            pageTrsResultStyleMainColor: null,
            pageTrsResultStyleTextColor: null,
            pageTrsResultStyleTextSize: null,
            pageTrsResultStyleTextWeight: null,
            pageTrsResultStyleCustom: "",
            pageTrsApiOptions: i.B.map((e) => e.id),
            pageTrsJumpTwo: !1,
            pageTrsEditable: !0,
            googleRegion: "com",
            googleType: "fast",
            googleMirror: "",
            googleHidePhonetic: !1,
            quickLinks: [
              {
                name: "谷歌搜索",
                link: "https://www.google.com/search?q=%s",
                menu: !0,
                panel: !0,
              },
              {
                name: "维基百科",
                link: "https://zh.wikipedia.org/w/index.php?search=%s",
                menu: !0,
                panel: !0,
              },
              {
                name: "剑桥词典",
                link: "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/%s",
                menu: !0,
                panel: !0,
              },
            ],
            noticesRead: [],
            customAPI: "",
            customAPINames: [],
            pointsEnabled: [],
            baiduDomain: null,
            aliDomain: null,
            ocrService: "tesseractocr",
            contextMenus: l.$,
            popupAction: "show-popup",
            pageTrsSource: "",
            pageTrsDest: ["中文(简体)"],
            pageTrsPanelPos: "bottom-right",
            chatGPTPrompt: "",
            chatGPTEndpoint: "",
            chatGPTModel: "gpt-5.4-nano",
            claudePrompt: "",
            claudeEndpoint: "",
            claudeModel: "claude-haiku-4-5-20251001",
            tongYiPrompt: "",
            tongYiEndpoint: "",
            tongYiModel: "qwen-turbo",
            lingYiPrompt: "",
            lingYiEndpoint: "",
            lingYiModel: "yi-medium",
            moonshotPrompt: "",
            moonshotEndpoint: "",
            moonshotModel: "moonshot-v1-8k",
            deepSeekPrompt: "",
            deepSeekEndpoint: "",
            deepSeekModel: "deepseek-v4-flash",
            zhiPuPrompt: "",
            zhiPuEndpoint: "",
            zhiPuModel: "glm-4-flash",
            miniMaxPrompt: "",
            miniMaxEndpoint: "",
            miniMaxModel: "abab6.5s-chat",
            baiChuanPrompt: "",
            baiChuanEndpoint: "",
            baiChuanModel: "baichuan4-air",
            douBaoPrompt: "",
            douBaoEndpoint: "",
            douBaoModel: "",
            wenXinPrompt: "",
            wenXinEndpoint: "",
            wenXinModel: "ernie_speed",
            wenXinNewPrompt: "",
            wenXinNewEndpoint: "",
            wenXinNewModel: "ernie-speed-8k",
            hunYuanPrompt: "",
            hunYuanEndpoint: "",
            hunYuanModel: "hunyuan-lite",
            siliConflowPrompt: "",
            siliConflowEndpoint: "",
            siliConflowModel: "Qwen/Qwen2.5-7B-Instruct",
            geminiPrompt: "",
            geminiEndpoint: "",
            geminiModel: "gemini-1.5-flash",
            grokPrompt: "",
            grokEndpoint: "",
            grokModel: "grok-3-mini",
            ollamaPrompt: "",
            ollamaEndpoint: "",
            ollamaModel: "",
            deeplEndpoint: "",
          },
          y = {
            hoverTranslate: !1,
            latestSource: "",
            pageTrsAuto: !1,
            pageTrsType: s.a.both,
            tipForShortKeyForPageTrsTypeClosed: !1,
            tipForFullTextClosed: !1,
            tipForDeepLLimitClosed: !1,
            user: null,
            optionsSyncAt: null,
            disabledNofiByBrowserUI: !1,
            favoritesSyncAt: null,
            historiesSyncAt: null,
            deeplKey: [],
            deeplPoints: u.rc,
            baiDuAppKey: [],
            bdPoints: c.p4,
            bdProPoints: c.cG,
            baiDuOCRKey: [],
            bdOcrPoints: d.pR,
            youDaoAppKey: [],
            ydPoints: r.Gu,
            aLiApiKey: [],
            aliPoints: a.Dx,
            aliProPoints: a.Qy,
            qqApiKey: [],
            qqPoints: h.fH,
            hsApiKey: [],
            hsPoints: x.Gs,
            soGouApiKey: [],
            cyApiToken: [],
            cyPoints: o.n8,
            chatGPTKey: [],
            claudeKey: [],
            tongYiKey: [],
            lingYiKey: [],
            moonshotKey: [],
            deepSeekKey: [],
            zhiPuKey: [],
            miniMaxKey: [],
            baiChuanKey: [],
            douBaoKey: [],
            wenXinKey: [],
            wenXinKeyNew: [],
            hunYuanKey: [],
            siliConflowKey: [],
            grokKey: [],
            geminiKey: [],
            ocrLimit: { date: 0, times: 0 },
            pdfLimit: { date: 0, times: 0 },
            pageTranslateLimit: { date: 0, times: 0 },
            sttLimit: { date: 0, times: 0 },
            videoLimit: { date: 0, times: 0 },
            panelTranslateLimit: { date: 0, times: 0 },
            crossTranslateLimit: { date: 0, times: 0 },
            pdfZoom: "",
            noticesUnreadNum: 0,
            noticesFiltered: [],
            tipForFirstExportClosed: !1,
            tipForPasteTranslateClosed: !1,
            tipForDropTranslateClosed: !1,
            tipForAddJumpTwoClosed: !0,
            tipForServicesUpdateClosed: !0,
            tipForGoogleTranslateClosed: !1,
            tipForSaveSourceSelectClosed: !0,
          };
      },
      17840: (e, n, t) => {
        (t(81045), t(55367));
      },
      27551: (e, n, t) => {
        t.d(n, { N: () => s });
        t(82738);
        function s(e) {
          try {
            return JSON.parse(e);
          } catch (n) {
            return (console.error("JSON 解析失败，返回原始字符串：", n), e);
          }
        }
      },
      29842: (e, n, t) => {
        t.d(n, { Fw: () => s.F, VC: () => i.V, xh: () => l.x });
        var s = t(17368),
          i = (t(34426), t(1783)),
          l = t(23298);
      },
      34426: (e, n, t) => {
        t.d(n, { H: () => r });
        var s = t(17368),
          i = t(46123),
          l = t.n(i);
        function r(e) {
          if (e instanceof s.F) return e;
          if (e instanceof Error) return new s.F(e.message, { type: null });
          const n = l()(e, "message");
          return "string" == typeof n
            ? new s.F(n, { type: null })
            : new s.F(
                "划词翻译内部出现了一个预期之外的错误，如果你看到了这条消息，请反馈给我。",
                { type: null },
              );
        }
      },
      34843: (e, n, t) => {
        t.d(n, {
          $2: () => r.$,
          NF: () => o.NF,
          NZ: () => a.N,
          Z5: () => o.Z5,
          _: () => l._,
          fm: () => i.f,
          qs: () => s.qs,
        });
        var s = t(37767),
          i = (t(29516), t(64347)),
          l = t(74976),
          r = t(73109),
          a = (t(12980), t(27551)),
          o = (t(51934), t(99687), t(3257));
      },
      37767: (e, n, t) => {
        t.d(n, { qs: () => i });
        (t(69375), t(81045), t(84915));
        var s = t(17546);
        function i(e) {
          const n = [];
          return (
            s(e, (e, t) => {
              const s = Array.isArray(e) ? e : [e];
              n.push(
                ...s.map(
                  (e) => `${t}=${null == e ? "" : encodeURIComponent(e)}`,
                ),
              );
            }),
            n.join("&")
          );
        }
      },
      38232: (e, n, t) => {
        t.d(n, { WN: () => s.W });
        (t(67863), t(23810));
        var s = t(3161);
      },
      46613: (e, n, t) => {
        t.d(n, { O: () => i });
        t(17840);
        const s = {
          "中文(简体)": "zh",
          英语: "en",
          俄语: "ru",
          西班牙语: "es",
          法语: "fr",
          阿拉伯语: "ar",
          土耳其语: "tr",
          葡萄牙语: "pt",
          泰语: "th",
          印尼语: "id",
          意大利语: "it",
          越南语: "vi",
        };
        function i(e, n = "", t = "") {
          const i = s[t] || "auto",
            l = s[n] || "zh";
          return `https://translate.alibaba.com/#hcfy_text=${encodeURIComponent(e)}&hcfy_from=${i}&hcfy_to=${l}`;
        }
      },
      50657: (e, n, t) => {
        t.d(n, { n0: () => c, pR: () => o });
        (t(69375), t(64727), t(81045), t(84915), t(55367));
        var s = t(56357),
          i = t(72431),
          l = t(34975),
          r = t(20843),
          a = t(31768);
        const o = !0,
          c = {
            id: i.P2.BaiDu,
            name: "百度文字识别",
            package: !0,
            points: !0,
            secretKeys: {
              get: () =>
                chrome.storage.local
                  .get({ baiDuOCRKey: [] })
                  .then(({ baiDuOCRKey: e }) =>
                    (Array.isArray(e) ? e : [e]).map((e) => ({
                      id: e.key,
                      key: e.secret,
                    })),
                  ),
              set: (e) =>
                chrome.storage.local.set({
                  baiDuOCRKey: e.map((e) => ({ key: e.id, secret: e.key })),
                }),
              isComplete: (e) => (0, r.hP)(e, ["id"]),
            },
            pointsEnable: {
              get: () =>
                chrome.storage.local
                  .get({ bdOcrPoints: o })
                  .then(({ bdOcrPoints: e }) => e),
              set: (e) => chrome.storage.local.set({ bdOcrPoints: e }),
            },
          };
        class d extends s.m {
          constructor() {
            super(c, !0);
          }
          async callByPackage(e) {
            const n = await (0, a.K)("services/baidu/ocr", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                image: e.image,
                paragraph: !0,
                language_type: "auto_detect",
              }),
            });
            if (!(0, l.E)(n))
              throw new Error("识别图片时出错了，错误消息：" + n.error_msg);
            return n;
          }
          async callBySecretKey(e, n) {
            const t = await (0, l.l)(e, {
              image: n.image,
              paragraph: !0,
              language_type: "auto_detect",
            });
            if ((0, l.E)(t)) return t;
            throw new Error("识别图片时出错了，错误消息：" + t.error_msg);
          }
          transform(e) {
            if (!e.paragraphs_result)
              throw new Error(
                "百度文字识别服务配置有误，请确认你领取过免费资源包，且密钥填写无误。",
              );
            return e.paragraphs_result
              .reduce(
                (n, { words_result_idx: t }) => (
                  n.push(t.reduce((n, t) => n + e.words_result[t].words, "")),
                  n
                ),
                [],
              )
              .join("\n");
          }
        }
        new d();
      },
      54493: (e, n, t) => {
        t.d(n, {
          O: () => i,
          P9: () => s,
          PD: () => c,
          UU: () => r,
          Zi: () => a,
          dd: () => o,
          pb: () => l,
        });
        const s = "",
          i =
            ".__hcfy-result-comparison__ {\n  outline: 1px dotted;\n}\n\n.__hcfy-result-editing__ {\n  outline: 2px solid #2d72d2;\n  border-radius: 2px;\n}\n\nhcfy-result-content:focus {\n  outline: none;\n}",
          l =
            ".__hcfy-result-comparison__ {\n  outline: 1px dotted var(--hcfy-result-main-color, #008B45);\n}\n\n.__hcfy-result-comparison__ hcfy-result-content {\n  color: var(--hcfy-result-text-color, unset);\n  font-size: var(--hcfy-result-text-size, unset);\n  font-weight: var(--hcfy-result-text-weight, unset);\n}\n\n.__hcfy-result-editing__ {\n  outline: 2px solid #2d72d2;\n  border-radius: 2px;\n}\n\nhcfy-result-content:focus {\n  outline: none;\n}\n\n.__hcfy-result-comparison-inline__ {\n  margin-left: 0.4em;\n}",
          r =
            ".__hcfy-result-comparison__ hcfy-result-content {\n  text-decoration: var(--hcfy-result-main-color, #008B45) wavy underline;\n  text-underline-offset: 0.2em;\n  color: var(--hcfy-result-text-color, unset);\n  font-size: var(--hcfy-result-text-size, unset);\n  font-weight: var(--hcfy-result-text-weight, unset);\n}\n\n.__hcfy-result-editing__ hcfy-result-content {\n  text-decoration: none;\n}\n\n.__hcfy-result-editing__ {\n  outline: 2px solid #2d72d2;\n  border-radius: 2px;\n}\n\nhcfy-result-content:focus {\n  outline: none;\n}\n\n.__hcfy-result-comparison-inline__ hcfy-result-content {\n  margin-left: 0.4em;\n}",
          a =
            ".__hcfy-result-comparison__ hcfy-result-content {\n  text-decoration: var(--hcfy-result-main-color, #008B45) underline;\n  text-underline-offset: 0.2em;\n  color: var(--hcfy-result-text-color, unset);\n  font-size: var(--hcfy-result-text-size, unset);\n  font-weight: var(--hcfy-result-text-weight, unset);\n}\n\n.__hcfy-result-editing__ hcfy-result-content {\n  text-decoration: none;\n}\n\n.__hcfy-result-editing__ {\n  outline: 2px solid #2d72d2;\n  border-radius: 2px;\n}\n\nhcfy-result-content:focus {\n  outline: none;\n}\n\n.__hcfy-result-comparison-inline__ hcfy-result-content {\n  margin-left: 0.4em;\n}",
          o =
            ".__hcfy-result-comparison__ hcfy-result-content {\n  background-color: var(--hcfy-result-main-color, #008B45);\n  color: var(--hcfy-result-text-color, white);\n  font-size: var(--hcfy-result-text-size, unset);\n  font-weight: var(--hcfy-result-text-weight, unset);\n}\n\n.__hcfy-result-editing__ hcfy-result-content {\n  background: unset;\n  color: unset;\n}\n\n.__hcfy-result-editing__ {\n  outline: 2px solid #2d72d2;\n  border-radius: 2px;\n}\n\nhcfy-result-content:focus {\n  outline: none;\n}\n\n.__hcfy-result-comparison-inline__ hcfy-result-content {\n  margin-left: 0.4em;\n}",
          c =
            ".__hcfy-result-comparison__ {\n  border-left: 3px solid var(--hcfy-result-main-color, #008B45);\n  padding-left: 6px;\n}\n\n.__hcfy-result-comparison__ hcfy-result-content {\n  color: var(--hcfy-result-text-color, unset);\n  font-size: var(--hcfy-result-text-size, unset);\n  font-weight: var(--hcfy-result-text-weight, unset);\n}\n\n.__hcfy-result-comparison-block__ {\n  padding: 6px 0 6px 12px;\n}\n\n.__hcfy-result-comparison-inline__ {\n  margin-left: 0.4em;\n}\n\n.__hcfy-result-editing__ {\n  border-left-color: transparent;\n  outline: 2px solid #2d72d2;\n  border-radius: 2px;\n}\n\nhcfy-result-content:focus {\n  outline: none;\n}";
      },
      54565: (e, n, t) => {
        t(1363);
        var s = t(25873),
          i = t(47304),
          l = t(74253);
        const r = {
          "zh-CN": {
            settings: JSON.parse(
              '{"buy":{"step1name":"第一步：注册账号","step2name":"第二步：购买","done_name":"完成","finish_btn":"完成","payName":{"wechat":"微信","alipay":"支付宝","paypal":"PayPal"},"choosePayMethod":"请选择支付方式：","howPaypal":"如何使用 PayPal 付款","loadingPrice":"正在加载价格信息，请稍候……","loadingPriceFail":"价格信息加载失败，请稍后重试。","payByMethod":"请使用<Bold>{{ payMethodLabel }}</Bold>扫描下方二维码支付：","chooseBuyType":"请选择：","loadingQR":"正在加载二维码，请稍候……","loadingQRFail":"加载二维码时出错，请稍后重试。错误信息：","aliPayExtraErrorMsg":"支付宝偶尔不能正常加载二维码，请换用其它支付方式。","qrImgAlt":"支付二维码","payTip":"当你完成支付后，此页面一般会在 5 秒内自动跳转，在跳转之前请不要关闭窗口。如果 30 秒后还没有跳转，你可以重启浏览器试试。","openVIP":"开通会员","foreverVIPMsg":"您的会员永不过期。您可以前往【个人中心】确认会员到期时间。","VIPOpenedUntilMsg":"您的会员到期时间为 {{ time }}。您可以前往【个人中心】确认会员到期时间。","buyPoints":"购买翻译积分","pointsRestMsg":"您的翻译积分数量为 {{ points }}。您可以前往【个人中心】确认翻译积分余额。","noBuyTypeError":"不支持的购买类型：{{ type }}","loginText":"已有账号？去登录","nextStep":"下一步"},"permission":{"notAllowURLTitle":"未允许划词翻译访问文件网址","goToAllowURLDescription":"你需要先前往<GoToDetailLink>划词翻译的详细信息页面</GoToDetailLink>勾选【允许访问文件网址】，划词翻译才能检测到或者自动打开你拖放进浏览器的 PDF 文件。另外，当你勾选之后，你就可以将你电脑里的文件（例如 <InlineCode>.txt</InlineCode>、<InlineCode>.md</InlineCode>、<InlineCode>.html</InlineCode> 或 <InlineCode>.png</InlineCode>）拖放进浏览器并使用划词翻译了。","goToAllowURLBtn":"去勾选","noAllowURL":"由于你的浏览器不提供本地文件的访问权限，所以划词翻译无法自动打开你拖放进浏览器的 PDF 文件，也无法在以 <InlineCode>file:///</InlineCode> 开头的网址（例如你拖放进浏览器的 <InlineCode>.txt</InlineCode> 或 <InlineCode>.png</InlineCode> 文件）里使用。","incognitoTipTitle":"无痕模式下的限制","incognitoTip":"由于浏览器自身的安全限制，内置 PDF 阅读器无法在无痕窗口中使用，所以当你在无痕窗口中打开内置 PDF 阅读器时，划词翻译会自动改为在普通窗口中打开。"}}',
            ),
          },
        };
        i.Ay.use(l.r9).init({
          resources: r,
          lng: "zh-CN",
          defaultNS: "settings",
          interpolation: { escapeValue: !1 },
        });
        const a = i.Ay;
        var o = t(14041),
          c = t(7428),
          d = t(93431),
          h = t(78220),
          x = t(30185),
          u = t(18392),
          p = t(63446),
          g = t(11234),
          j = t(96538),
          m = t(73432),
          y = t(69325),
          f = t(31724),
          v = t(19687),
          b = t(65343),
          k = t(20916),
          C = (t(64727), t(59596)),
          T = t(92170),
          S = t(7276),
          w = t(46128),
          P = t(74874),
          E = t.n(P),
          _ = t(31085);
        function A(e) {
          const [n, t] = (0, o.useState)(!1),
            s = e.inputRef,
            [i, l] = (0, o.useState)(null);
          (0, o.useEffect)(() => {
            s && ("function" == typeof s ? s(i) : (s.current = i));
          }, [i, s]);
          const r = { ...e, inputRef: l };
          return (0, _.jsx)(T.M, {
            ...r,
            type: n ? "text" : "password",
            rightElement: (0, _.jsx)(v.$, {
              icon: n ? "eye-open" : "eye-off",
              minimal: !0,
              onClick: () => {
                (t((e) => !e), i?.focus());
              },
            }),
          });
        }
        var M = t(26085);
        function L(e, n = document.body) {
          const t = document.createElement("div");
          n.appendChild(t);
          const i = (0, s.H)(t);
          return new Promise((n, t) => {
            i.render(
              (0, _.jsx)(M.V, {
                ...e,
                usePortal: !1,
                ref: (e) => {
                  e
                    ? n(e)
                    : t(new Error("[Blueprint] Unable to create toaster."));
                },
              }),
            );
          });
        }
        const I = L(),
          N = { email: "", pwd: "", vk: "" },
          R = (0, o.forwardRef)(function (e, n) {
            const { onLogin: t, openType: s, tip: i } = e,
              [l, r] = (0, o.useState)(!1),
              a = (0, o.useRef)(null),
              c = (0, o.useRef)(null),
              [d, x] = (0, o.useState)(null),
              u = "login" === s,
              p = u ? "登录" : "注册";
            (0, o.useEffect)(() => {
              d && d.focus();
            }, [d]);
            const [g, j] = (0, o.useState)(N),
              [m, y] = (0, w.A)(async () => {
                try {
                  await (0, S.cN)("/sendEmail", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(E()(g, "email")),
                  });
                } catch (e) {
                  return void console.error("发送邮箱验证码失败：", e);
                }
                (I.then((e) => {
                  e.show({
                    intent: "success",
                    message: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("p", {
                          children: "验证码已发送到你的邮箱，请查收。",
                        }),
                        (0, _.jsx)("div", {
                          className: h.KJG,
                          children:
                            "如果长时间没有收到验证码，请确认邮箱是否填写有误，或者检查验证码邮件是否在垃圾邮箱里。",
                        }),
                      ],
                    }),
                    timeout: 0,
                  });
                }),
                  r(!0));
              }, [g]),
              [f, b] = (0, w.A)(async () => {
                try {
                  const e = await (0, S.cN)(u ? "/login" : "/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(g),
                  });
                  t(e);
                } catch (e) {
                  console.error("登录/注册失败：", e);
                }
              }, [s, g, t]);
            return (
              (0, o.useImperativeHandle)(
                n,
                () => ({
                  clear() {
                    j(N);
                  },
                  focus(e) {
                    "user" === e
                      ? a.current?.focus()
                      : "pwd" === e && c.current?.focus();
                  },
                }),
                [],
              ),
              (0, _.jsxs)("form", {
                onSubmit: (e) => {
                  (e.preventDefault(), u || l ? b() : y());
                },
                children: [
                  (0, _.jsxs)("div", {
                    className: h.sar,
                    children: [
                      i,
                      (0, _.jsx)(C.g, {
                        label: "邮箱",
                        labelFor: "email-input",
                        labelInfo: "（区分大小写）",
                        children: (0, _.jsx)(T.M, {
                          id: "email-input",
                          disabled: f.loading,
                          inputRef: a,
                          value: g.email,
                          onChange: (e) => {
                            j((n) => ({ ...n, email: e.target.value }));
                          },
                          required: !0,
                          type: "email",
                          pattern: "\\b[\\w.-]+@[\\w.-]+\\.\\w{2,4}\\b",
                        }),
                      }),
                      (0, _.jsx)(C.g, {
                        label: "密码",
                        labelFor: "pwd-input",
                        children: (0, _.jsx)(A, {
                          id: "pwd-input",
                          disabled: f.loading,
                          inputRef: c,
                          value: g.pwd,
                          onChange: (e) => {
                            j((n) => ({ ...n, pwd: e.target.value }));
                          },
                          required: !0,
                          minLength: 6,
                          maxLength: 20,
                        }),
                      }),
                      l &&
                        (0, _.jsx)(C.g, {
                          label: "验证码",
                          labelFor: "vk-input",
                          children: (0, _.jsx)(T.M, {
                            id: "vk-input",
                            inputRef: x,
                            disabled: f.loading,
                            value: g.vk,
                            onChange: (e) => {
                              j((n) => ({ ...n, vk: e.target.value }));
                            },
                            required: !0,
                          }),
                        }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: h.DBf,
                    children: (0, _.jsxs)("div", {
                      className: h.Nu2,
                      style: { alignItems: "center" },
                      children: [
                        "login" === s &&
                          (0, _.jsx)("a", {
                            href: "https://hcfy.ai/forget.html",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "忘记密码？",
                          }),
                        (0, _.jsx)(v.$, {
                          text: p,
                          loading: m.loading || f.loading,
                          type: "submit",
                          intent: "primary",
                          style: { marginLeft: "15px" },
                        }),
                      ],
                    }),
                  }),
                ],
              })
            );
          });
        var F = t(16224),
          D = t(25148);
        const O = (0, o.createContext)(),
          $ = (0, o.createContext)(),
          K = E()(F.Ne, "user");
        function B(e) {
          const [n, t] = (0, D.A)(K),
            s = (0, o.useCallback)(
              (e) => {
                t({ user: e });
              },
              [t],
            );
          return (0, _.jsx)($.Provider, {
            value: s,
            children: (0, _.jsx)(O.Provider, {
              value: n && n.user,
              children: e.children,
            }),
          });
        }
        function z(e) {
          const { open: n } = e,
            t = (0, o.useRef)(),
            { setShowLogin: s, syncOptions: i } = (0, o.useContext)(Se),
            l = (0, o.useContext)($),
            r = (0, c.Zp)(),
            a = () => {
              t.current?.clear();
            },
            d = "登录";
          return (0, _.jsx)(k.l, {
            isOpen: n,
            onClose: () => {
              (s(!1), a());
            },
            onClosed: a,
            onOpened: () => {
              t.current?.focus("user");
            },
            title: d,
            children: (0, _.jsx)(R, {
              ref: t,
              onLogin: (e) => {
                (s(!1), l(e), i(e));
              },
              openType: "login",
              tip: (0, _.jsxs)("p", {
                children: [
                  "划词翻译无需",
                  d,
                  "即可免费使用，只有当你要用",
                  (0, _.jsx)("a", {
                    onClick: () => {
                      (s(!1), r("/store"));
                    },
                    children: "套餐包",
                  }),
                  "或",
                  (0, _.jsx)("a", {
                    onClick: () => {
                      (s(!1), r("/store"));
                    },
                    children: "会员功能",
                  }),
                  "时才需要",
                  d,
                  "。",
                ],
              }),
            }),
          });
        }
        var H = t(73466),
          U = (t(82738), t(61412), t(91883), t(70286), t(34843));
        function V(e, n) {
          const t = new URL(e, "https://hcfy.ai/").toString();
          return (0, U.Z5)(t, n).then(async (e) => {
            const n = e.clone(),
              t = await n.text();
            let s;
            try {
              s = JSON.parse(t);
            } catch (e) {
              return (console.error("解析官网配置 JSON 失败：", e), t);
            }
            return s;
          });
        }
        var q = t(97519);
        const { sanitize: Y } = q.A;
        function Z(e) {
          const { docURL: n } = e,
            t = (0, H.A)(async () => V(n), [n]);
          return t.loading
            ? (0, _.jsx)("p", { children: "正在加载，请稍候……" })
            : t.error
              ? (0, _.jsx)("p", { children: "加载失败，请稍后重试。" })
              : (0, _.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: t.value
                      ? Y(t.value.replace(/bp5/g, "bp6"), {
                          USE_PROFILES: { html: !0 },
                          ADD_ATTR: ["target"],
                        })
                      : "加载失败，请稍后重试。",
                  },
                });
        }
        function G(e) {
          const { t: n } = (0, l.Bd)(),
            { nextBtnText: t, summaryURL: s, onNext: i, onLogin: r } = e,
            a = (0, o.useContext)(O);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: h.sar,
                children: (0, _.jsx)(Z, { docURL: s }),
              }),
              (0, _.jsx)("div", {
                className: h.DBf,
                children: (0, _.jsxs)("div", {
                  className: h.Nu2,
                  style: { alignItems: "center" },
                  children: [
                    !a &&
                      (0, _.jsx)("a", {
                        onClick: r,
                        children: n("buy.loginText"),
                      }),
                    (0, _.jsx)(v.$, {
                      intent: "primary",
                      text: t || n("buy.nextStep"),
                      onClick: i,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var W = t(98179),
          J = t(85444);
        function X(e) {
          let n;
          return e?.vipEndTime && (0, W.f)((n = new Date(e.vipEndTime)))
            ? {
                isOpened: !0,
                text: "续费会员",
                endTime: (0, J.GP)(n, "yyyy 年 M 月 d 日 HH:mm:ss"),
              }
            : { isOpened: !1, text: "开通会员" };
        }
        (t(81045), t(5350));
        var Q = t(23590),
          ee = t(48209),
          ne = t(46108),
          te = t.n(ne),
          se = t(86234);
        const ie = [
            { label: a.t("buy.payName.wechat"), value: "wx" },
            { label: a.t("buy.payName.alipay"), value: "alipay" },
            { label: a.t("buy.payName.paypal"), value: "pp" },
          ],
          le = "https://hcfy.ai/docs/paypal";
        function re(e) {
          const { t: n } = (0, l.Bd)(),
            { onPaid: t, priceURL: s, createOrderAPI: i } = e,
            [r, a] = (0, o.useState)("wx"),
            [c, d] = (0, o.useState)(""),
            x = ie.find((e) => e.value === r)?.label,
            u = (0, H.A)(async () => {
              const e = await V(s);
              return (d(e[0].value), e);
            }, [s]),
            p = (0, H.A)(async () => {
              if (c) {
                if ("pp" !== r)
                  return (0, S.cN)(i, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: c, method: r }),
                  });
                window.open(le);
              }
            }, [r, c, i]),
            g = p.value;
          return (
            (0, o.useEffect)(() => {
              if (!g) return;
              const e = window.setInterval(async () => {
                if (!g) return;
                let e;
                try {
                  e = await (0, S.cN)("/checkOrder?orderId=" + g.orderId);
                } catch (e) {
                  return void console.error("检查订单状态失败：", e);
                }
                e.paid && t(e.user);
              }, 1e3);
              return () => {
                window.clearInterval(e);
              };
            }, [t, g]),
            (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)("div", {
                className: h.sar,
                children: [
                  (0, _.jsx)(se.z, {
                    label: n("buy.choosePayMethod"),
                    inline: !0,
                    options: ie,
                    selectedValue: r,
                    onChange: (e) => {
                      a(e.currentTarget.value);
                    },
                  }),
                  "pp" === r
                    ? (0, _.jsx)("div", {
                        children: (0, _.jsx)("a", {
                          href: le,
                          target: "_blank",
                          rel: "noreferrer",
                          children: n("buy.howPaypal"),
                        }),
                      })
                    : (0, _.jsxs)(_.Fragment, {
                        children: [
                          u.loading
                            ? (0, _.jsx)("p", {
                                children: n("buy.loadingPrice"),
                              })
                            : u.error
                              ? (0, _.jsx)("p", {
                                  children: n("buy.loadingPriceFail"),
                                })
                              : (0, _.jsx)(se.z, {
                                  label: n("buy.chooseBuyType"),
                                  inline: !0,
                                  onChange: (e) => {
                                    d(e.currentTarget.value);
                                  },
                                  selectedValue: c,
                                  options: u.value,
                                }),
                          (0, _.jsx)("p", {
                            children: (0, _.jsx)(l.x6, {
                              i18nKey: "buy.payByMethod",
                              components: {
                                Bold: (0, _.jsx)("b", {
                                  style: { fontSize: 20 },
                                }),
                              },
                              values: { payMethodLabel: x },
                            }),
                          }),
                          p.loading
                            ? (0, _.jsx)("p", { children: n("buy.loadingQR") })
                            : p.error
                              ? (0, _.jsxs)("p", {
                                  children: [
                                    n("buy.loadingQRFail"),
                                    (0, _.jsx)("span", {
                                      style: { color: "#FFB366" },
                                      children: p.error.message,
                                    }),
                                    "alipay" === r &&
                                      n("buy.aliPayExtraErrorMsg"),
                                  ],
                                })
                              : g &&
                                (0, _.jsxs)(_.Fragment, {
                                  children: [
                                    (0, _.jsx)("p", {
                                      children: (0, _.jsx)("img", {
                                        src: g.qrUrl,
                                        width: 280,
                                        height: 280,
                                        alt: n("buy.qrImgAlt"),
                                      }),
                                    }),
                                    (0, _.jsx)("p", {
                                      className: h.E4k,
                                      children: n("buy.payTip"),
                                    }),
                                  ],
                                }),
                        ],
                      }),
                ],
              }),
            })
          );
        }
        const ae = (0, _.jsx)(Q.I, { icon: "tick-circle", intent: "success" });
        function oe(e) {
          const { t: n } = (0, l.Bd)(),
            t = (0, o.useContext)(O),
            s = (0, o.useContext)($),
            {
              onFinish: i,
              generateSuccessMsg: r,
              priceURL: a,
              createOrderAPI: c,
              onPaid: d,
            } = e,
            x = (0, o.useRef)(),
            [u, p] = (0, o.useState)(t ? 1 : 0),
            [g, j] = (0, o.useState)([
              { text: n("buy.step1name") },
              { text: n("buy.step2name") },
              { text: n("buy.done_name") },
            ]);
          return (
            (0, o.useEffect)(() => {
              (j((e) => {
                const n = te()(e);
                return (
                  n.forEach((e, n) => {
                    n < u
                      ? ((e.current = !1), (e.icon = ae))
                      : n === u
                        ? ((e.current = !0), delete e.icon)
                        : ((e.current = !1), delete e.icon);
                  }),
                  n
                );
              }),
                0 !== u || x.current?.focus("user"));
            }, [u]),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(ee.B, {
                  className: "buy-steps",
                  items: g,
                  overflowListProps: { minVisibleItems: 3 },
                }),
                0 === u &&
                  (0, _.jsx)(R, {
                    ref: x,
                    onLogin: (e) => {
                      (s(e), p((e) => e + 1));
                    },
                    openType: "register",
                  }),
                1 === u &&
                  (0, _.jsx)(re, {
                    priceURL: a,
                    createOrderAPI: c,
                    onPaid: (e) => {
                      (s(e), d && d(), p((e) => e + 1));
                    },
                  }),
                2 === u &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)("div", {
                        className: h.sar,
                        children: ["支付成功！", t && r(t)],
                      }),
                      (0, _.jsx)("div", {
                        className: h.DBf,
                        children: (0, _.jsx)("div", {
                          className: h.Nu2,
                          children: (0, _.jsx)(v.$, {
                            text: n("buy.finish_btn"),
                            intent: "primary",
                            onClick: i,
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        var ce = t(67116);
        let de = (function (e) {
          return (
            (e[(e.VIP = 0)] = "VIP"),
            (e[(e.Points = 1)] = "Points"),
            (e[(e.Package = 2)] = "Package"),
            (e[(e.Traffic = 3)] = "Traffic"),
            e
          );
        })({});
        const he = {
          [de.VIP]: {
            title: a.t("buy.openVIP"),
            docURL: "/vip-summary3.html",
            summaryBtnText: a.t("buy.openVIP"),
            docPricesURL: "/prices.json",
            qrAPI: "/getPayQR",
            generateSuccessMsg: (e) =>
              e.forever
                ? a.t("buy.foreverVIPMsg")
                : a.t("buy.VIPOpenedUntilMsg", { time: X(e).endTime }),
            onPaid: () => {
              (0, ce._)({ action: "sync data" });
            },
          },
          [de.Points]: {
            title: a.t("buy.buyPoints"),
            docURL: void 0,
            summaryBtnText: void 0,
            docPricesURL: "/points.json",
            qrAPI: "/getPointsPayQR",
            onPaid: void 0,
            generateSuccessMsg: (e) =>
              a.t("buy.pointsRestMsg", { points: e.points }),
          },
          [de.Package]: {
            title: "购买套餐包",
            docURL: void 0,
            summaryBtnText: "购买套餐包",
            docPricesURL: "/pack.json",
            qrAPI: "/getPayQRByPackage",
            onPaid: void 0,
            generateSuccessMsg: (e) =>
              `套餐包购买成功！到期时间：${(0, J.GP)(new Date(e.packageEndTime), "yyyy 年 M 月 d 日 HH:mm:ss")}。请前往【个人中心】查看详细信息。`,
          },
          [de.Traffic]: {
            title: "购买流量包",
            docURL: void 0,
            summaryBtnText: "购买流量包",
            docPricesURL: "/traffic.json",
            qrAPI: "/getPayQRByTraffic",
            onPaid: void 0,
            generateSuccessMsg: (e) =>
              `流量包购买成功！流量包剩余额度：${e.trafficCredits?.toFixed(4)}。请前往【个人中心】查看详细信息。`,
          },
        };
        function xe(e) {
          const { t: n } = (0, l.Bd)(),
            { isOpen: t, buyType: s } = e,
            i = he[s],
            r = i.docURL ? 0 : 1,
            [a, c] = (0, o.useState)(r),
            {
              setShowVip: d,
              setShowLogin: h,
              setShowBuyPoints: x,
              setShowBuyPackage: u,
              setShowBuyTraffic: p,
            } = (0, o.useContext)(Se);
          let g;
          switch (s) {
            case de.VIP:
              g = d;
              break;
            case de.Points:
              g = x;
              break;
            case de.Package:
              g = u;
              break;
            case de.Traffic:
              g = p;
              break;
            default:
              throw new TypeError(n("buy.noBuyTypeError", { type: s }));
          }
          const j = () => {
              g(!1);
            },
            m = () => {
              (j(), c(r));
            };
          return (0, _.jsxs)(k.l, {
            isOpen: t,
            canOutsideClickClose: !1,
            canEscapeKeyClose: !1,
            onClose: m,
            title: i.title,
            style: 0 === a ? { width: 660 } : void 0,
            children: [
              i.docURL &&
                0 === a &&
                (0, _.jsx)(G, {
                  summaryURL: i.docURL,
                  nextBtnText: i.summaryBtnText,
                  onNext: () => {
                    c((e) => e + 1);
                  },
                  onLogin: () => {
                    (j(), h(!0));
                  },
                }),
              1 === a &&
                (0, _.jsx)(oe, {
                  priceURL: i.docPricesURL,
                  createOrderAPI: i.qrAPI,
                  onPaid: i.onPaid,
                  generateSuccessMsg: i.generateSuccessMsg,
                  onFinish: m,
                }),
            ],
          });
        }
        var ue = t(38792),
          pe = t.n(ue),
          ge = t(20124),
          je = t.n(ge);
        const me = je()("utils/syncOptions");
        async function ye() {
          const e = await chrome.storage.local.get(F.g2),
            n = await (0, S.cN)("/options", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ options: JSON.stringify(e) }),
            });
          (me("上传设置成功，此次更新时间：%o", n),
            await chrome.storage.local.set({ optionsSyncAt: n }));
        }
        async function fe(e) {
          let n;
          (e ||
            (n = (await chrome.storage.local.get("optionsSyncAt"))
              .optionsSyncAt),
            me("开始检查自这一段时间后的设置是否有更新：%o", n));
          const t = await (0, S.cN)(
            "/options?ifModifiedSince=" + n,
            void 0,
            !0,
          );
          if (204 === t.status)
            return (me("检查结果：服务器没有保存过设置"), "no-data");
          if (304 === t.status)
            return (me("检查结果：设置没有变更过，无需更新"), "not-modified");
          const s = await t.json();
          if (!s)
            return (
              me("检查结果：服务器返回的数据是 null"),
              "server-data-error"
            );
          let i;
          try {
            i = JSON.parse(s.optionsString);
          } catch (e) {
            return (
              console.error("解析服务器设置数据失败：", e),
              me(
                "检查结果：服务器返回的数据有问题，无法 JSON.parse：%s",
                s.optionsString,
              ),
              "server-data-error"
            );
          }
          return pe()(await chrome.storage.local.get(F.g2), i)
            ? (await chrome.storage.local.set({ optionsSyncAt: s.updatedAt }),
              me(
                "检查结果：用 deepEqual 确认过发现本地设置跟服务器的设置是一样的，无需更新",
              ),
              "not-modified")
            : e || n
              ? ((i.optionsSyncAt = s.updatedAt),
                await chrome.storage.local.set(i),
                me("检查结果：用服务器的设置覆盖了本地的设置"),
                "covered")
              : (me(
                  "检查结果：本地没有更新时间，需要跟用户确认用服务器的还是本地的设置",
                ),
                { status: "need-confirm", date: s.updatedAt });
        }
        var ve = t(50758),
          be = t(68802);
        const ke = L({ maxToasts: 2 }),
          Ce = (0, o.forwardRef)(function (e, n) {
            const [t, s] = (0, o.useState)(!1),
              [i, l] = (0, o.useState)("");
            (0, o.useImperativeHandle)(
              n,
              () => ({
                async syncOptions() {
                  let e;
                  try {
                    e = await (async function () {
                      const e = await fe();
                      return "no-data" === e ? (await ye(), "uploaded") : e;
                    })();
                  } catch (e) {
                    return void console.error("同步设置失败：", e);
                  }
                  if ("string" != typeof e) (l(e.date), s(!0));
                  else {
                    (await ke).show({
                      intent: "success",
                      message: (0, _.jsxs)(_.Fragment, {
                        children: [
                          "uploaded" === e && "已将划词翻译设置上传到服务器。",
                          "not-modified" === e &&
                            "划词翻译设置已经是最新的了，无需更新。",
                          "server-data-error" === e &&
                            "服务器保存的划词翻译设置数据有误，请稍后重试。如果多次出现这种情况，请反馈给我。",
                          "covered" === e && "已更新划词翻译设置。",
                        ],
                      }),
                    });
                  }
                },
              }),
              [],
            );
            const r = new Date(i),
              a = (0, W.f)(r) ? (0, J.GP)(r, "yyyy-MM-dd HH:mm:ss") : "";
            return (0, _.jsxs)(ve.F, {
              isOpen: t,
              cancelButtonText: "上传本地设置",
              confirmButtonText: "下载云端设置",
              onCancel: async () => {
                s(!1);
                try {
                  await ye();
                  (await ke).show({ intent: "success", message: "上传成功" });
                } catch (e) {
                  console.error("上传设置失败：", e);
                }
              },
              onConfirm: async () => {
                let e;
                s(!1);
                try {
                  e = await fe(!0);
                } catch (e) {
                  return void console.error("下载设置失败：", e);
                }
                (await ke).show({
                  intent: "success",
                  message: (0, _.jsxs)(_.Fragment, {
                    children: [
                      "no-data" === e &&
                        "服务器没有保存过划词翻译设置，请先将本地设置上传。",
                      "not-modified" === e &&
                        "划词翻译设置已经是最新的了，无需更新。",
                      "server-data-error" === e &&
                        "服务器保存的划词翻译设置数据有误，请稍后重试。如果多次出现这种情况，请反馈给我。",
                      "covered" === e && "已更新划词翻译设置。",
                    ],
                  }),
                });
              },
              children: [
                (0, _.jsx)(be.H4, { children: "同步设置" }),
                (0, _.jsxs)("p", {
                  children: [
                    "您本地的设置与 ",
                    a,
                    " ",
                    "上传至云端的设置不一致，您想要如何同步您的设置？",
                  ],
                }),
              ],
            });
          });
        var Te = t(35577);
        const Se = (0, o.createContext)(),
          we = "?login" === window.location.search,
          Pe = "?vip" === window.location.search;
        function Ee(e) {
          const [n, t] = (0, o.useState)(we),
            [s, i] = (0, o.useState)(!1),
            [l, r] = (0, o.useState)(!1),
            [a, d] = (0, o.useState)(!1),
            [h, x] = (0, o.useState)(Pe),
            u = (0, o.useRef)(null),
            p = (0, c.Zp)(),
            g = (0, o.useCallback)(
              (e) => {
                (0, Te.Rc)(e)
                  ? u.current?.syncOptions()
                  : (alert("购买套餐包或会员后才可以将设置同步到云端。"),
                    p("/store"));
              },
              [p],
            );
          return (0, _.jsxs)(Se.Provider, {
            value: {
              setShowLogin: t,
              setShowBuyPoints: d,
              setShowBuyPackage: r,
              setShowBuyTraffic: i,
              setShowVip: x,
              syncOptions: g,
            },
            children: [
              (0, _.jsx)(z, { open: n }),
              (0, _.jsx)(xe, { isOpen: s, buyType: de.Traffic }),
              (0, _.jsx)(xe, { isOpen: l, buyType: de.Package }),
              (0, _.jsx)(xe, { isOpen: a, buyType: de.Points }),
              (0, _.jsx)(xe, { isOpen: h, buyType: de.VIP }),
              (0, _.jsx)(Ce, { ref: u }),
              e.children,
            ],
          });
        }
        (t(69375), t(84915));
        var _e = t(66110),
          Ae = t(3444);
        const { sanitize: Me } = q.A,
          Le = "?notices" === window.location.search,
          Ie = {
            ...E()(F.g2, ["noticesRead"]),
            ...E()(F.Ne, ["noticesUnreadNum", "noticesFiltered"]),
          };
        function Ne() {
          const [e, n] = (0, D.A)(Ie),
            [t, s] = (0, o.useState)(!0),
            [i, l] = (0, o.useState)(Le),
            r = [],
            a = [];
          e &&
            e.noticesFiltered.forEach((n) => {
              e.noticesRead.includes(n.id) ? r.push(n) : a.push(n);
            });
          const c = t ? a : r;
          return (
            (0, o.useEffect)(() => {
              (0, ce._)({ action: "refresh notices" });
            }, []),
            (0, _.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, _.jsx)(_e.A, {
                  popoverClassName: "notice-popover",
                  isOpen: i,
                  position: "bottom",
                  onClose: () => {
                    l(!1);
                  },
                  onClosed: () => {
                    s(!0);
                  },
                  content: (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsxs)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 10,
                        },
                        children: [
                          (0, _.jsx)(be.H4, {
                            style: { marginBottom: 0 },
                            children: "通知",
                          }),
                          (0, _.jsxs)("a", {
                            onClick: () => s((e) => !e),
                            children: ["显示", t ? "已读" : "未读"],
                          }),
                        ],
                      }),
                      (0, _.jsxs)("div", {
                        className: "notices-box",
                        children: [
                          c.map((t) => {
                            const s = e?.noticesRead.includes(t.id);
                            return (0, _.jsxs)(
                              u.Z,
                              {
                                style: { padding: 10 },
                                children: [
                                  t.title &&
                                    (0, _.jsx)(be.H6, { children: t.title }),
                                  (0, _.jsx)("p", {
                                    dangerouslySetInnerHTML: {
                                      __html: Me(t.text),
                                    },
                                  }),
                                  (t.link || !s) &&
                                    (0, _.jsxs)("p", {
                                      className: "actions",
                                      children: [
                                        t.link &&
                                          (0, _.jsx)("a", {
                                            href: t.link,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "查看详情",
                                          }),
                                        !s &&
                                          (0, _.jsx)(_.Fragment, {
                                            children: (0, _.jsx)("a", {
                                              style: { float: "right" },
                                              onClick: () => {
                                                n((e) => {
                                                  e.noticesRead.push(t.id);
                                                });
                                              },
                                              children: "标为已读",
                                            }),
                                          }),
                                      ],
                                    }),
                                ],
                              },
                              t.id,
                            );
                          }),
                          !c.length &&
                            (0, _.jsx)(Ae.I, {
                              icon: "notifications-updated",
                              description: `没有${t ? "未读" : "已读"}通知`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  children: (0, _.jsx)(v.$, {
                    icon: "notifications",
                    onClick: () => l((e) => !e),
                    minimal: !0,
                  }),
                }),
                !!e?.noticesUnreadNum &&
                  (0, _.jsx)("div", {
                    className: "notices-num",
                    style: { position: "absolute", top: 0, right: 0 },
                    children: e?.noticesUnreadNum,
                  }),
              ],
            })
          );
        }
        var Re = t(22221);
        function Fe(e) {
          const n = (0, o.useRef)(null),
            { inline: t } = e;
          return (
            (0, o.useEffect)(() => {
              if (!t) return;
              const e = n.current;
              if (!e) return;
              const s = e.closest("." + h.wWS);
              return s
                ? ((s.style.display = "inline"),
                  () => {
                    s.style.display = "";
                  })
                : void 0;
            }, [t]),
            (0, _.jsx)(Re.m, {
              interactionKind: "hover",
              hoverCloseDelay: 300,
              position: "bottom",
              content: (0, _.jsx)("div", {
                style: { width: e.width || 300 },
                children: e.children,
              }),
              children: (0, _.jsx)("span", {
                ref: n,
                style: { display: "inline-flex", height: 12, width: 12 },
                children: (0, _.jsx)(Q.I, {
                  icon: "help",
                  size: 12,
                  style: { cursor: "help" },
                }),
              }),
            })
          );
        }
        function De() {
          const { syncOptions: e } = (0, o.useContext)(Se),
            n = (0, o.useContext)(O),
            t = (0, c.Zp)();
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)(m.F, {
              fixedToTop: !0,
              children: [
                (0, _.jsx)(y.y, {
                  align: "left",
                  children: (0, _.jsxs)(f.r, {
                    children: [
                      "划词翻译",
                      " ",
                      (0, _.jsxs)("span", {
                        className: h.KJG,
                        children: ["v", chrome.runtime.getManifest().version],
                      }),
                    ],
                  }),
                }),
                (0, _.jsxs)(y.y, {
                  align: "right",
                  children: [
                    (0, _.jsx)(v.A, {
                      icon: "git-repo",
                      text: "更新日志",
                      minimal: !0,
                      href: "https://hcfy.ai/docs/log",
                      target: "_blank",
                      rel: "noreferrer",
                    }),
                    (0, _.jsx)(v.A, {
                      icon: "issue",
                      text: "反馈问题",
                      href: "https://hcfy.ai/docs/issues",
                      target: "_blank",
                      rel: "noreferrer",
                    }),
                    (0, _.jsx)(b.c, {}),
                    (0, _.jsx)(v.$, {
                      icon: "refresh",
                      text: "同步设置",
                      onClick: () => {
                        e(n);
                      },
                      style: { marginRight: "10px" },
                    }),
                    (0, _.jsxs)(Fe, {
                      children: [
                        (0, _.jsx)("p", {
                          children:
                            "开通会员后，划词翻译会在你每次更改设置后自动将设置上传到服务器。",
                        }),
                        (0, _.jsx)("div", {
                          children:
                            "另外，划词翻译会在后台每隔一小时检查设置是否有变更，你也可以点击“同步设置”按钮立刻进行一次检查。",
                        }),
                      ],
                    }),
                    (0, _.jsx)(b.c, {}),
                    (0, _.jsx)(v.$, {
                      icon: n ? ((0, Te.Rc)(n) ? "crown" : "user") : "log-in",
                      minimal: !0,
                      onClick: () => {
                        t("/user");
                      },
                      rightIcon: n ? "caret-down" : void 0,
                      text: n ? n.email : "登录",
                    }),
                    (0, _.jsx)(Ne, {}),
                  ],
                }),
              ],
            }),
          });
        }
        var Oe = t(29842);
        let $e = !1;
        const Ke = L({ maxToasts: 2 });
        var Be = t(22780),
          ze = t(23619);
        function He(e) {
          const [n, t] = (0, o.useState)(null);
          return (
            (0, o.useEffect)(() => {
              function n() {
                chrome.permissions.contains(e).then(t);
              }
              return (
                n(),
                chrome.permissions.onAdded.addListener(n),
                chrome.permissions.onRemoved.addListener(n),
                () => {
                  (chrome.permissions.onAdded.removeListener(n),
                    chrome.permissions.onRemoved.removeListener(n));
                }
              );
            }, [e]),
            n
          );
        }
        const Ue = { permissions: ["notifications"] };
        const Ve = { origins: ["<all_urls>"] };
        const qe = navigator.userAgent,
          Ye = (qe.includes("Mac"), qe.includes("Chrome")),
          Ze = qe.includes("Edg"),
          Ge = Ye && !Ze,
          We = qe.includes("Firefox");
        var Je = t(22067);
        const Xe = "chrome://extensions/?id=" + chrome.runtime.id;
        function Qe() {
          chrome.tabs.create({ url: Xe });
        }
        const en = (0, _.jsx)("a", {
          onClick: Qe,
          children: "划词翻译的详细信息页面",
        });
        function nn() {
          const { t: e } = (0, l.Bd)(),
            n = (0, H.A)(
              () => chrome.extension.isAllowedFileSchemeAccess(),
              [],
            );
          return n.loading || n.value || n.error
            ? null
            : (0, _.jsxs)(Je.P, {
                icon: "info-sign",
                title: e("permission.notAllowURLTitle"),
                children: [
                  (0, _.jsx)("p", {
                    children: (0, _.jsx)(l.x6, {
                      i18nKey: "permission.goToAllowURLDescription",
                      components: {
                        GoToDetailLink: (0, _.jsx)("a", { onClick: Qe }),
                        InlineCode: (0, _.jsx)(be.Cy, {}),
                      },
                    }),
                  }),
                  (0, _.jsx)(v.$, {
                    intent: "primary",
                    onClick: Qe,
                    children: e("permission.goToAllowURLBtn"),
                  }),
                ],
              });
        }
        function tn() {
          return (0, _.jsx)(Je.P, {
            icon: "info-sign",
            children: (0, _.jsx)(l.x6, {
              i18nKey: "permission.noAllowURL",
              components: { InlineCode: (0, _.jsx)(be.Cy, {}) },
            }),
          });
        }
        const sn = Ze ? "站点访问权限" : "有权访问的网站";
        function ln() {
          const e = He(Ve),
            [n, t] = (0, o.useState)(!0);
          return e || null == e
            ? null
            : (0, _.jsxs)(k.l, {
                title: "你更改了划词翻译的权限范围",
                isOpen: n,
                icon: "warning-sign",
                onClose: () => t(!1),
                children: [
                  (0, _.jsxs)(Be.R, {
                    children: [
                      (0, _.jsxs)("p", {
                        children: [
                          "划词翻译检测到你更改了【",
                          sn,
                          "】，这会导致划词翻译在所有网站内都无法正常使用，各翻译服务以及登录 / 注册划词翻译账号时均会提示”服务器无响应“。请前往",
                          en,
                          "，将【",
                          sn,
                          "】改为【在所有网站上】。",
                        ],
                      }),
                      (0, _.jsx)("div", {
                        children:
                          "如果你希望在部分网站内不启用网页划词，你可以点击浏览器地址栏右侧的划词翻译图标，展开【此页面已启用网页划词】，然后选择【在当前网站中禁用】。你还可以在左侧的【网页划词翻译】中勾选【在所有网站中禁用网页划词】，只通过快捷键、辅助键或右键菜单的方式显示翻译结果。",
                      }),
                    ],
                  }),
                  (0, _.jsx)(ze.E, {
                    actions: (0, _.jsx)(v.$, {
                      intent: "primary",
                      onClick: Qe,
                      children: "去修改",
                    }),
                  }),
                ],
              });
        }
        function rn(e) {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("li", {
                className: `${h.E4k} ${h.KJG}`,
                style: { marginTop: 15, paddingLeft: 5 },
                children: e.title,
              }),
              (0, _.jsx)(x.N, {}),
            ],
          });
        }
        function an() {
          (0, j.A)();
          const e = (0, c.zy)(),
            n = (0, c.Zp)(),
            t = (0, o.useContext)(O),
            s = e.pathname;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(ln, {}),
              (0, _.jsx)(De, {}),
              (0, _.jsx)(u.Z, {
                id: "left-nav",
                children: (0, _.jsxs)(p.W, {
                  large: !0,
                  children: [
                    (0, _.jsx)(g.D, {
                      active: "/store" === s,
                      icon: "shop",
                      text: "商店",
                      href: (0, c.$P)("/store"),
                    }),
                    (0, _.jsx)(rn, { title: "我的" }),
                    (0, _.jsx)(g.D, {
                      active: "/user" === s,
                      icon: "user",
                      text: t ? "个人中心" : "登录 / 注册",
                      href: (0, c.$P)("/user"),
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/services" === e.pathname,
                      href: (0, c.$P)("/services"),
                      icon: "applications",
                      text: "服务申请",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/stars" === s,
                      href: (0, c.$P)("/stars"),
                      icon: "folder-open",
                      text: "收藏夹",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/history" === s,
                      href: (0, c.$P)("/history"),
                      icon: "history",
                      text: "历史记录",
                    }),
                    (0, _.jsx)(rn, { title: "通用设置" }),
                    (0, _.jsx)(g.D, {
                      active: "/shortcut" === s,
                      href: (0, c.$P)("/shortcut"),
                      icon: "key-option",
                      text: "快捷键",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/appearance" === s,
                      href: (0, c.$P)("/appearance"),
                      icon: "control",
                      text: "外观",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/audio" === s,
                      href: (0, c.$P)("/audio"),
                      icon: "volume-up",
                      text: "语音朗读",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/notifications" === s,
                      href: (0, c.$P)("/notifications"),
                      icon: "notifications",
                      text: "通知",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/services-options" === s,
                      href: (0, c.$P)("/services-options"),
                      icon: "multi-select",
                      text: "第三方服务",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/other" === s,
                      href: (0, c.$P)("/other"),
                      icon: "cog",
                      text: "其它",
                    }),
                    (0, _.jsx)(rn, { title: "功能设置" }),
                    (0, _.jsx)(g.D, {
                      active: "/panel" === s,
                      href: (0, c.$P)("/panel"),
                      icon: "th-list",
                      text: "翻译面板",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/cross" === s,
                      href: (0, c.$P)("/cross"),
                      icon: "text-highlight",
                      text: "网页划词翻译",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/fulltext" === s,
                      href: (0, c.$P)("/fulltext"),
                      icon: "translate",
                      text: "网页全文翻译",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/standalone" === s,
                      href: (0, c.$P)("/standalone"),
                      icon: "modal",
                      text: "独立翻译窗口",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/pdf" === s,
                      href: (0, c.$P)("/pdf"),
                      icon: "document",
                      text: "PDF",
                    }),
                    (0, _.jsx)(rn, { title: "其它" }),
                    (0, _.jsx)(g.D, {
                      icon: "crown",
                      text: "开通会员",
                      onClick: () => {
                        n("/store");
                      },
                    }),
                    (0, _.jsx)(g.D, {
                      icon: "clean",
                      text: "邀请有礼",
                      target: "_blank",
                      href: "https://hcfy.ai/docs/invite",
                    }),
                    (0, _.jsx)(g.D, {
                      active: "/about" === e.pathname,
                      href: (0, c.$P)("/about"),
                      icon: "info-sign",
                      text: "关于",
                    }),
                  ],
                }),
              }),
              (0, _.jsx)("main", {
                id: "main",
                children: (0, _.jsx)(c.sv, {}),
              }),
            ],
          });
        }
        (d.$.onlyShowFocusOnTabs(),
          $e ||
            ((0, S.M4)((e) => {
              const n = { intent: "danger", message: "" },
                t = (0, Oe.xh)(e);
              return (
                (n.message = t.message),
                t.link &&
                  (n.action = {
                    text: t.link.name,
                    href: t.link.url,
                    target: "_blank",
                  }),
                Ke.then((e) => {
                  e.show(n);
                }),
                Promise.reject(e)
              );
            }),
            ($e = !0)));
        var on = t(92375),
          cn = t(66033);
        function dn() {
          const { setShowLogin: e, syncOptions: n } = (0, o.useContext)(Se),
            t = (0, o.useContext)($),
            s = (0, c.Zp)(),
            i = (0, o.useRef)(null),
            [l, r] = (0, o.useState)("login");
          return (
            (0, o.useEffect)(() => {
              "login" === l && i.current?.focus("user");
            }, [l]),
            (0, _.jsxs)(on.t, {
              id: "login-or-reg-tabs",
              large: !0,
              selectedTabId: l,
              onChange: r,
              children: [
                (0, _.jsx)(cn.o, {
                  id: "login",
                  title: "登录",
                  panel: (0, _.jsx)(R, {
                    ref: i,
                    openType: "login",
                    onLogin: (e) => {
                      (t(e), n(e));
                    },
                  }),
                }),
                (0, _.jsx)(cn.o, {
                  id: "reg",
                  title: "注册",
                  panel: (0, _.jsxs)(_.Fragment, {
                    children: [
                      "划词翻译无需注册即可免费使用，在",
                      (0, _.jsx)("a", {
                        onClick: () => {
                          (e(!1), s("/store"));
                        },
                        children: "购买套餐包",
                      }),
                      "或",
                      (0, _.jsx)("a", {
                        onClick: () => {
                          (e(!1), s("/store"));
                        },
                        children: "开通会员",
                      }),
                      "时才能注册账号。",
                    ],
                  }),
                }),
              ],
            })
          );
        }
        function hn(e) {
          const { title: n, children: t } = e;
          return (0, _.jsxs)("div", {
            className: "item-list",
            children: [n && (0, _.jsx)(be.H4, { children: n }), t],
          });
        }
        function xn(e) {
          return (0, _.jsxs)("div", {
            className: "item-list-item",
            children: [
              (0, _.jsx)("div", { className: "item-title", children: e.title }),
              (0, _.jsx)("div", {
                className: "item-content",
                children: e.children,
              }),
            ],
          });
        }
        var un = t(78303);
        function pn(e) {
          return (0, _.jsxs)("p", {
            className: "utils-flex",
            children: [
              (0, _.jsxs)("span", {
                children: [
                  (0, _.jsx)("span", { children: e.title }),
                  e.description &&
                    (0, _.jsx)("span", {
                      className: `${h.KJG} ${h.E4k}`,
                      style: { display: "block" },
                      children: e.description,
                    }),
                ],
              }),
              (0, _.jsx)("span", { className: h.E4k, children: e.children }),
            ],
          });
        }
        function gn(e) {
          const { user: n, onVip: t } = e,
            s = X(e.user);
          return (0, _.jsxs)(pn, {
            title: "到期时间",
            children: [
              n.forever && (0, _.jsx)(_.Fragment, { children: "永不过期" }),
              !s.isOpened && (0, _.jsx)(_.Fragment, { children: "未开通" }),
              !n.forever && (0, Te.Rc)(n) && s.endTime,
              s.isOpened &&
                !(0, Te.Rc)(n) &&
                (0, _.jsxs)(_.Fragment, {
                  children: [s.endTime, "（已过期）"],
                }),
              (0, _.jsx)(v.$, {
                style: { marginLeft: 15 },
                disabled: n.forever,
                icon: "crown",
                text: s.text,
                onClick: t,
              }),
            ],
          });
        }
        const jn = E()(F.Ne, ["optionsSyncAt"]);
        function mn() {
          const { syncOptions: e } = (0, o.useContext)(Se),
            n = (0, o.useContext)(O),
            t = (0, o.useContext)($),
            [s] = (0, D.A)(jn),
            i = (0, c.Zp)(),
            [l, r] = (0, w.A)(async () => {
              (await (0, S.cN)("/logout", { method: "POST" }),
                t(null),
                chrome.storage.local.remove([
                  "optionsSyncAt",
                  "favoritesSyncAt",
                  "historiesSyncAt",
                ]));
            }, []);
          return (
            (0, o.useEffect)(() => {
              (0, un.x)({ force: !0 });
            }, []),
            n
              ? (0, _.jsxs)(hn, {
                  title: "个人中心",
                  children: [
                    (0, _.jsxs)(xn, {
                      title: "个人信息",
                      children: [
                        (0, _.jsxs)(pn, {
                          title: "账号",
                          children: [
                            n.email,
                            (0, _.jsx)(v.$, {
                              style: { marginLeft: 15 },
                              icon: "log-out",
                              loading: l.loading,
                              text: "退出登录",
                              onClick: r,
                            }),
                          ],
                        }),
                        (0, _.jsxs)(pn, {
                          title: "上次同步设置的时间",
                          children: [
                            s
                              ? s.optionsSyncAt
                                ? (0, J.GP)(
                                    new Date(s.optionsSyncAt),
                                    "yyyy 年 M 月 d 日 HH:mm:ss",
                                  )
                                : "未同步过设置"
                              : null,
                            (0, _.jsx)(v.$, {
                              style: { marginLeft: 15 },
                              icon: "refresh",
                              text: "立即同步",
                              onClick: () => {
                                e(n);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(xn, {
                      title: "会员",
                      children: (0, _.jsx)(gn, {
                        user: n,
                        onVip: () => {
                          i("/store");
                        },
                      }),
                    }),
                    (0, _.jsxs)(xn, {
                      title: "套餐包",
                      children: [
                        (0, _.jsx)(pn, {
                          title: "到期时间",
                          children: n.packageEndTime
                            ? (0, J.GP)(
                                new Date(n.packageEndTime),
                                "yyyy 年 M 月 d 日 HH:mm:ss",
                              )
                            : "未购买过套餐包",
                        }),
                        n.packageNextTime &&
                          (0, _.jsx)(pn, {
                            title: "下次重置时间",
                            children: (0, J.GP)(
                              new Date(n.packageNextTime),
                              "yyyy 年 M 月 d 日 HH:mm:ss",
                            ),
                          }),
                        (0, _.jsx)(pn, {
                          title: "总额度",
                          children: n.packageLeft?.total,
                        }),
                        (0, _.jsx)(pn, {
                          title: "已使用额度",
                          children: n.packageLeft?.used,
                        }),
                      ],
                    }),
                    (0, _.jsx)(xn, {
                      title: "流量包",
                      children: (0, _.jsx)(pn, {
                        title: "剩余额度",
                        children: Number((n.trafficCredits || 0).toFixed(2)),
                      }),
                    }),
                    (0, _.jsx)(xn, {
                      title: "翻译积分",
                      children: (0, _.jsx)(pn, {
                        title: "剩余",
                        children: n.points || 0,
                      }),
                    }),
                  ],
                })
              : null
          );
        }
        function yn() {
          const e = (0, o.useContext)(O);
          return (0, _.jsxs)("div", {
            id: "user-center",
            style: { margin: "15px", width: 700 },
            children: [!e && (0, _.jsx)(dn, {}), e && (0, _.jsx)(mn, {})],
          });
        }
        t(9925);
        var fn = t(78107),
          vn = t(16342),
          bn = t(74371),
          kn = t(89411),
          Cn = t(79565),
          Tn = t(50393);
        function Sn() {
          const [e, n] = (0, o.useState)(!1);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("a", {
                onClick: () => {
                  n(!0);
                },
                children: "查看范例",
              }),
              (0, _.jsx)(k.l, {
                isOpen: e,
                onClose: () => {
                  n(!1);
                },
                title: "范例",
                className: "example-dialog",
                children: (0, _.jsx)("div", {
                  className: h.sar,
                  children: (0, _.jsxs)(Cn._, {
                    bordered: !0,
                    compact: !0,
                    striped: !0,
                    children: [
                      (0, _.jsx)("thead", {
                        children: (0, _.jsxs)("tr", {
                          children: [
                            (0, _.jsx)("th", { children: "规则" }),
                            (0, _.jsx)("th", { children: "匹配的网址" }),
                            (0, _.jsx)("th", { children: "不匹配的网址" }),
                          ],
                        }),
                      }),
                      (0, _.jsxs)("tbody", {
                        children: [
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", { children: "*/*" }),
                                  (0, _.jsx)("p", {
                                    children: "匹配任意网址。",
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", { children: "limingkai.cn" }),
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "baidu.com/search",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "jd.com/item.html",
                                  }),
                                ],
                              }),
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)("p", {
                                  children: "没有不匹配的网址",
                                }),
                              }),
                            ],
                          }),
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "*.limingkai.cn/*",
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "匹配 ",
                                      (0, _.jsx)(be.Cy, {
                                        children: "limingkai.cn",
                                      }),
                                      " 或者所有域名以",
                                      " ",
                                      (0, _.jsx)(be.Cy, {
                                        children: ".limingkai.cn",
                                      }),
                                      " 结尾的网址，网址可以有任意路径。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", { children: "limingkai.cn" }),
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/path",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "aaa.hcfy.limingkai.cn",
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "limingkai.org ",
                                      (0, _.jsx)(kn.v, {
                                        children: "域名不匹配",
                                      }),
                                    ],
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "baidu.com ",
                                      (0, _.jsx)(kn.v, {
                                        children: "域名不匹配",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "limingkai.cn/*",
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "匹配域名是 ",
                                      (0, _.jsx)(be.Cy, {
                                        children: "limingkai.cn",
                                      }),
                                      " 的所有网址。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", { children: "limingkai.cn" }),
                                  (0, _.jsx)("p", {
                                    children: "limingkai.cn/path",
                                  }),
                                ],
                              }),
                              (0, _.jsx)("td", {
                                children: (0, _.jsxs)("p", {
                                  children: [
                                    "hcfy.limingkai.cn ",
                                    (0, _.jsx)(kn.v, {
                                      children: "域名不匹配",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "limingkai.cn/",
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "仅匹配 ",
                                      (0, _.jsx)(be.Cy, {
                                        children: "limingkai.cn",
                                      }),
                                      " 这一个网址。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)("p", {
                                  children: "limingkai.cn",
                                }),
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "hcfy.limingkai.cn ",
                                      (0, _.jsx)(kn.v, {
                                        children: "域名不匹配",
                                      }),
                                    ],
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "limingkai.cn/path ",
                                      (0, _.jsx)(kn.v, {
                                        children: "路径不匹配",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", { children: "*/path" }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "匹配任意域名的网址，但路径部分只能是 ",
                                      (0, _.jsx)(be.Cy, { children: "path" }),
                                      "。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/path",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "baidu.com/path",
                                  }),
                                ],
                              }),
                              (0, _.jsx)("td", {
                                children: (0, _.jsxs)("p", {
                                  children: [
                                    "hcfy.limingkai.cn/a ",
                                    (0, _.jsx)(kn.v, {
                                      children: "路径不匹配",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", { children: "*/path/" }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "匹配任意域名，但路径部分只能是 ",
                                      (0, _.jsx)(be.Cy, { children: "path/" }),
                                      "。跟上个例子相比，路径末尾多了一个 ",
                                      (0, _.jsx)(be.Cy, { children: "/" }),
                                      "。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/path/",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "baidu.com/path/",
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "hcfy.limingkai.cn/path ",
                                      (0, _.jsx)(kn.v, {
                                        children: "路径不匹配",
                                      }),
                                    ],
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "hcfy.limingkai.cn/path/a ",
                                      (0, _.jsx)(kn.v, {
                                        children: "路径不匹配",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/*path*",
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "匹配 ",
                                      (0, _.jsx)(be.Cy, {
                                        children: "hcfy.limingkai.cn",
                                      }),
                                      " 域名且路径中包含",
                                      " ",
                                      (0, _.jsx)(be.Cy, { children: "path" }),
                                      " 的网址。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/path",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/abcpath",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/abc/path",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/abc/pathdef",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "hcfy.limingkai.cn/abc/path/def",
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "hcfy.limingkai.cn/paXth ",
                                      (0, _.jsx)(kn.v, {
                                        children: "路径不匹配",
                                      }),
                                    ],
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "hcfy.limingkai.cn/pa/th ",
                                      (0, _.jsx)(kn.v, {
                                        children: "路径不匹配",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "limingkai.cn/*/path/*/",
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "匹配 ",
                                      (0, _.jsx)(be.Cy, {
                                        children: "limingkai.cn",
                                      }),
                                      " 域名且路径中包含",
                                      " ",
                                      (0, _.jsx)(be.Cy, { children: "path" }),
                                      "、",
                                      (0, _.jsx)(be.Cy, { children: "path" }),
                                      " 左右有路径片段且以",
                                      " ",
                                      (0, _.jsx)(be.Cy, { children: "/" }),
                                      " 结尾的网址。",
                                    ],
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)("p", {
                                    children: "limingkai.cn/a/path/b/",
                                  }),
                                  (0, _.jsx)("p", {
                                    children: "limingkai.cn/a/b/path/c/d/",
                                  }),
                                ],
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "limingkai.cn/path/",
                                      " ",
                                      (0, _.jsxs)(kn.v, {
                                        children: [
                                          (0, _.jsx)(be.Cy, {
                                            children: "path",
                                          }),
                                          " 左右两边没有路径片段",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "limingkai.cn/a/path/",
                                      " ",
                                      (0, _.jsxs)(kn.v, {
                                        children: [
                                          (0, _.jsx)(be.Cy, {
                                            children: "path",
                                          }),
                                          " 右边没有路径片段",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, _.jsxs)("p", {
                                    children: [
                                      "limingkai.cn/path/b/",
                                      " ",
                                      (0, _.jsxs)(kn.v, {
                                        children: [
                                          (0, _.jsx)(be.Cy, {
                                            children: "path",
                                          }),
                                          " 左边没有路径片段",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function wn(e) {
          return `${e.host}${e.path}`;
        }
        function Pn(e) {
          const n = e.match(/^(([^:]+):\/\/)?([^/]+)?(\/.*)?$/);
          if (!n) return;
          let t = n[3] || "";
          const s = t.indexOf(":");
          s >= 0 && (t = t.slice(0, s));
          let i = n[4] || "";
          const l = i.indexOf("#");
          if ((l >= 0 && (i = i.slice(0, l)), !t.startsWith("."))) {
            if (!i) {
              if (!t) return;
              i = "/";
            }
            return { host: t, path: i };
          }
        }
        function En(e, n) {
          return new RegExp(
            "^" +
              e
                .replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&")
                .replace("*", ".*")
                .replace(/^\.\*\\\./, "(.*\\.)?") +
              "$",
          ).test(n);
        }
        function _n(e, n) {
          return new RegExp(
            "^" +
              e
                .replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&")
                .replace(/\*/g, ".*") +
              "$",
          ).test(n);
        }
        function An(e, n, t) {
          let s, i;
          s = "string" == typeof e ? Pn(e) : e;
          let l = !1,
            r = !1;
          if (s) {
            const e = (e) => {
              const n = (function (e, n) {
                let t;
                if (((t = "string" == typeof n ? Pn(n) : n), t))
                  return En(e.host, t.host) && _n(e.path, t.path);
              })(e, s);
              return (n && (i = e), n);
            };
            ((l = t.some(e)), l || (r = n.some(e)));
          }
          return {
            urlParts: s,
            matchedRule: i,
            whiteListMatched: l,
            blackListMatched: r,
          };
        }
        const Mn = { host: "", path: "/*" };
        function Ln(e, n) {
          switch (n.type) {
            case "reset":
              return Mn;
            case "merge":
              return { ...e, ...n.data };
            default:
              throw new TypeError("不支持的 action type: " + JSON.stringify(n));
          }
        }
        function In(e) {
          const {
              isOpen: n,
              setIsOpen: t,
              onSave: s,
              isExists: i,
              name: l,
            } = e,
            [r, a] = (0, o.useState)(!1),
            c = (0, o.useRef)(null),
            d = () => {
              (t(!1), u({ type: "reset" }), m(""));
            },
            [x, u] = (0, o.useReducer)(Ln, Mn),
            p = (function (e) {
              const n = e.host;
              return (
                !!n && ("*" === n || !n.includes("*") || /^\*\.[^*]+$/.test(n))
              );
            })(x),
            g = (e) => {
              const n = e.clipboardData?.getData("text");
              if (n) {
                const t = Pn(n);
                t && (e.preventDefault(), u({ type: "merge", data: t }));
              }
            },
            [j, m] = (0, o.useState)(""),
            y =
              p &&
              (function (e, n) {
                let t;
                if (((t = "string" == typeof n ? Pn(n) : n), t))
                  return {
                    isHostMatch: {
                      ruleHost: e.host,
                      urlHost: t.host,
                      matches: En(e.host, t.host),
                    },
                    isPathMatch: {
                      rulePath: e.path,
                      urlPath: t.path,
                      matches: _n(e.path, t.path),
                    },
                  };
              })(x, j),
            f = void 0 !== y,
            b = y && y.isHostMatch.matches && y.isPathMatch.matches;
          return (0, _.jsxs)(k.l, {
            canEscapeKeyClose: !1,
            canOutsideClickClose: !1,
            isOpen: n,
            onClose: d,
            onOpening: () => {
              c.current?.focus();
            },
            title: "新增" + l + "规则",
            className: "edit-rule-dialog",
            children: [
              (0, _.jsxs)("div", {
                className: h.sar,
                children: [
                  (0, _.jsx)(C.g, {
                    label: "规则的格式",
                    children: (0, _.jsxs)("div", {
                      className: h.cmW,
                      children: [
                        "规则由“网站”和“页面”两个部分组成，在这两个部分中都可以使用通配符",
                        " ",
                        (0, _.jsx)(be.Cy, { children: "*" }),
                        "。",
                        (0, _.jsxs)(be.UL, {
                          children: [
                            (0, _.jsxs)("li", {
                              children: [
                                "在“网站”中：",
                                (0, _.jsxs)(be.UL, {
                                  children: [
                                    (0, _.jsx)("li", {
                                      children:
                                        "可以有一个或 0 个通配符。如果有，则必须以通配符开头；",
                                    }),
                                    (0, _.jsx)("li", {
                                      children:
                                        "如果只填写了通配符，则表示匹配所有域名；",
                                    }),
                                    (0, _.jsxs)("li", {
                                      children: [
                                        "如果填写了以 ",
                                        (0, _.jsx)(be.Cy, { children: "*." }),
                                        " ",
                                        "开头的域名，则表示匹配所有以这个域名结尾的域名；",
                                      ],
                                    }),
                                    (0, _.jsx)("li", {
                                      children:
                                        "你也可以不使用通配符来匹配单一的域名。",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                "在“页面”中：",
                                (0, _.jsxs)(be.UL, {
                                  children: [
                                    (0, _.jsx)("li", {
                                      children:
                                        "可以使用任意多个通配符，每个通配符表示匹配 0 个或多个任意字符；",
                                    }),
                                    (0, _.jsxs)("li", {
                                      children: [
                                        "页面必须以 ",
                                        (0, _.jsx)(be.Cy, { children: "/" }),
                                        " 开头；",
                                      ],
                                    }),
                                    (0, _.jsxs)("li", {
                                      children: [
                                        "页面部分默认填写了 ",
                                        (0, _.jsx)(be.Cy, { children: "/*" }),
                                        "，表示匹配任意页面。",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, _.jsx)(Sn, {}),
                      ],
                    }),
                  }),
                  (0, _.jsx)(be.H5, { children: "填写规则" }),
                  (0, _.jsxs)(C.g, {
                    children: [
                      (0, _.jsxs)(Tn.t, {
                        children: [
                          (0, _.jsx)(T.M, {
                            placeholder: "域名",
                            value: x.host,
                            inputRef: c,
                            onChange: (e) => {
                              u({
                                type: "merge",
                                data: { host: e.target.value.trim() },
                              });
                            },
                            onPaste: g,
                          }),
                          (0, _.jsx)(T.M, {
                            placeholder: "路径",
                            value: x.path,
                            onChange: (e) => {
                              let n = e.target.value.trim();
                              ("/" !== n[0] && (n = "/" + n),
                                u({ type: "merge", data: { path: n } }));
                            },
                            onPaste: g,
                          }),
                        ],
                      }),
                      x.host &&
                        !p &&
                        (0, _.jsx)(Je.P, {
                          icon: null,
                          intent: "warning",
                          children: "域名格式不正确",
                        }),
                    ],
                  }),
                  (0, _.jsxs)(be.H5, {
                    children: [
                      "测试",
                      " ",
                      p &&
                        (0, _.jsx)(be.Cy, {
                          style: { fontWeight: "normal" },
                          children: wn(x),
                        }),
                    ],
                  }),
                  (0, _.jsxs)(C.g, {
                    children: [
                      (0, _.jsx)(T.M, {
                        value: j,
                        onChange: (e) => {
                          m(e.target.value.trim());
                        },
                        placeholder: "你可以填写一个网址来测试是否跟规则匹配",
                      }),
                      j &&
                        !f &&
                        (0, _.jsx)(Je.P, {
                          icon: null,
                          intent: "warning",
                          children: "网址格式不正确",
                        }),
                      y && f && b && (0, _.jsx)(Je.P, { title: "匹配" }),
                      y &&
                        f &&
                        !b &&
                        (0, _.jsxs)(Je.P, {
                          title: "不匹配",
                          children: [
                            y.isHostMatch.matches ||
                              (0, _.jsxs)("p", {
                                children: [
                                  "网址的域名 ",
                                  (0, _.jsx)(be.Cy, {
                                    children: y.isHostMatch.urlHost,
                                  }),
                                  " ",
                                  "不匹配规则 ",
                                  (0, _.jsx)(be.Cy, {
                                    children: y.isHostMatch.ruleHost,
                                  }),
                                ],
                              }),
                            y.isPathMatch.matches ||
                              (0, _.jsxs)("p", {
                                children: [
                                  "网址的路径 ",
                                  (0, _.jsx)(be.Cy, {
                                    children: y.isPathMatch.urlPath,
                                  }),
                                  " ",
                                  "不匹配规则 ",
                                  (0, _.jsx)(be.Cy, {
                                    children: y.isPathMatch.rulePath,
                                  }),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: h.DBf,
                children: (0, _.jsxs)("div", {
                  className: h.Nu2,
                  children: [
                    (0, _.jsx)(v.$, { onClick: d, children: "取消" }),
                    (0, _.jsx)(v.$, {
                      intent: "primary",
                      onClick: () => {
                        p ? (i(x) ? a(!0) : (s(x), d())) : c.current?.focus();
                      },
                      children: "保存",
                    }),
                    (0, _.jsxs)(ve.F, {
                      confirmButtonText: "我知道了",
                      isOpen: r,
                      onConfirm: () => {
                        a(!1);
                      },
                      children: [
                        "规则 ",
                        (0, _.jsx)(be.Cy, { children: wn(x) }),
                        " 已经有了，无需重复添加。",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function Nn(e) {
          const { rules: n, setRules: t, name: s, disabled: i } = e,
            [l, r] = (0, o.useState)(!1),
            a = (0, o.useRef)();
          const [c, d] = (0, o.useState)(!1),
            h = () => {
              (d(!1), (a.current = void 0));
            };
          return (0, _.jsxs)("div", {
            className: "domain-rules",
            children: [
              (0, _.jsxs)("div", {
                className: "header",
                children: [
                  (0, _.jsx)(be.H6, { children: s }),
                  (0, _.jsx)(v.$, {
                    disabled: i,
                    icon: "add",
                    onClick: () => {
                      r(!0);
                    },
                    minimal: !0,
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: "table-box",
                children: (0, _.jsx)(Cn._, {
                  bordered: !0,
                  striped: !0,
                  compact: !0,
                  children: (0, _.jsx)("tbody", {
                    children: n.length
                      ? n.map((e) => {
                          const n = wn(e);
                          return (0, _.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, _.jsx)("td", { children: n }),
                                (0, _.jsx)("td", {
                                  children: (0, _.jsx)(v.$, {
                                    disabled: i,
                                    minimal: !0,
                                    icon: "delete",
                                    onClick: () =>
                                      (function (e) {
                                        ((a.current = e), d(!0));
                                      })(e),
                                  }),
                                }),
                              ],
                            },
                            n,
                          );
                        })
                      : (0, _.jsx)("tr", {
                          children: (0, _.jsx)("td", {
                            colSpan: 2,
                            children: (0, _.jsx)(Ae.I, {
                              title: "没有规则",
                              description:
                                "黑名单" === s
                                  ? (0, _.jsx)(_.Fragment, {
                                      children:
                                        "命中黑名单的网址会禁用网页划词",
                                    })
                                  : (0, _.jsx)(_.Fragment, {
                                      children:
                                        "命中白名单的网址会始终启用网页划词",
                                    }),
                              action: (0, _.jsx)(v.$, {
                                disabled: i,
                                onClick: () => {
                                  r(!0);
                                },
                                intent: "primary",
                                children: "添加一条规则",
                              }),
                            }),
                          }),
                        }),
                  }),
                }),
              }),
              (0, _.jsxs)(ve.F, {
                icon: "trash",
                intent: "danger",
                isOpen: c,
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                onConfirm: () => {
                  if (a.current) {
                    const e = n.indexOf(a.current);
                    if (e >= 0) {
                      const s = [...n];
                      (s.splice(e, 1), t(s));
                    }
                  }
                  h();
                },
                onCancel: h,
                children: [
                  "确定要从",
                  s,
                  "中删除",
                  " ",
                  (0, _.jsx)(be.Cy, {
                    children: a.current ? wn(a.current) : "这条规则",
                  }),
                  " ",
                  "吗？",
                ],
              }),
              (0, _.jsx)(In, {
                isOpen: l,
                setIsOpen: r,
                onSave: (e) => {
                  const s = [...n];
                  (s.push(e), t(s));
                },
                isExists: (e) => n.some((n) => pe()(n, e)),
                name: s,
              }),
            ],
          });
        }
        var Rn = t(83813);
        function Fn() {
          const e = (0, c.Zp)();
          return (0, _.jsx)(Re.m, {
            interactionKind: "hover",
            hoverCloseDelay: 300,
            content: (0, _.jsxs)(_.Fragment, {
              children: [
                "此选项支持",
                (0, _.jsx)("a", {
                  onClick: () => e("/shortcut"),
                  children: "快捷键",
                }),
                "。",
              ],
            }),
            children: (0, _.jsx)(kn.v, {
              style: { fontWeight: "normal" },
              minimal: !0,
              children: "快捷键",
            }),
          });
        }
        const Dn = E()(F.g2, ["charsLimit"]);
        function On() {
          const [e, n] = (0, D.A)(Dn);
          return (0, _.jsx)(C.g, {
            label: "限制字符数量",
            helperText:
              "如果划选的文本字符数超过这个数量则不会显示翻译按钮或翻译结果。设置为 0 则不做限制。",
            children: (0, _.jsx)(bn.O, {
              min: 0,
              minorStepSize: 1,
              stepSize: 10,
              majorStepSize: 100,
              selectAllOnFocus: !0,
              selectAllOnIncrement: !0,
              value: e ? e.charsLimit : Dn.charsLimit,
              onValueChange: (e) => {
                n({ charsLimit: e });
              },
            }),
          });
        }
        const $n = [
            { label: "上", value: "top" },
            { label: "上左", value: "top-end" },
            { label: "上右", value: "top-start" },
            { label: "下", value: "bottom" },
            { label: "下左", value: "bottom-end" },
            { label: "下右", value: "bottom-start" },
            { label: "左", value: "left" },
            { label: "左上", value: "left-end" },
            { label: "左下", value: "left-start" },
            { label: "右", value: "right" },
            { label: "右上", value: "right-end" },
            { label: "右下", value: "right-start" },
          ],
          Kn = E()(F.g2, [
            "width",
            "pin",
            "pinEnhance",
            "pinPos",
            "pinAfterDrag",
            "placement",
            "closeAfterMove",
          ]);
        function Bn() {
          const [e, n] = (0, D.A)(Kn);
          return (0, _.jsxs)(u.Z, {
            children: [
              (0, _.jsx)(be.H4, { children: "网页划词面板" }),
              (0, _.jsx)(C.g, {
                children: (0, _.jsx)(fn.Sc, {
                  label: "鼠标移动后自动关闭面板",
                  checked: e ? e.closeAfterMove : Kn.closeAfterMove,
                  onChange: (e) => {
                    n({ closeAfterMove: e.target.checked });
                  },
                }),
              }),
              (0, _.jsx)(C.g, {
                label: "面板宽度",
                helperText: "拖动面板的左右边缘可以调整面板的宽度。",
                children: (0, _.jsx)(T.M, {
                  disabled: !0,
                  value: e ? e.width + "px" : Kn.width + "px",
                }),
              }),
              (0, _.jsx)(C.g, {
                helperText:
                  "弹窗会先尝试朝这个方向显示，如果空间不够，它会自动调整方向确保处于可视区域内。",
                children: (0, _.jsx)(se.z, {
                  label: "弹窗显示方向",
                  inline: !0,
                  onChange: (e) => {
                    n({ placement: e.target.value });
                  },
                  selectedValue: e ? e.placement : Kn.placement,
                  className: "placement-group",
                  children: $n.map((e) =>
                    (0, _.jsx)(
                      fn.sx,
                      { value: e.value, label: e.label },
                      e.value,
                    ),
                  ),
                }),
              }),
              (0, _.jsx)(C.g, {
                helperText: (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("p", {
                      children:
                        "勾选此选项后，固定模式下的翻译面板会新增以下行为：",
                    }),
                    (0, _.jsxs)(be.UL, {
                      children: [
                        (0, _.jsx)("li", {
                          children: "在网页上划词后会立刻显示翻译结果。",
                        }),
                        (0, _.jsx)("li", {
                          children:
                            "点击网页空白处不会关闭翻译面板，只能点击翻译面板的关闭按钮才能关闭。",
                        }),
                      ],
                    }),
                  ],
                }),
                children: (0, _.jsx)(fn.Sc, {
                  label: "为固定模式添加默认行为",
                  checked: e ? e.pinEnhance : Kn.pinEnhance,
                  onChange: (e) => {
                    n({ pinEnhance: e.currentTarget.checked });
                  },
                }),
              }),
              (0, _.jsx)(C.g, {
                label: "当前是否固定：",
                children: (e ? e.pin : Kn.pin) ? "是" : "否",
              }),
              (0, _.jsxs)(C.g, {
                label: "面板位置",
                helperText:
                  "固定模式下面板距离浏览器左上角的距离。拖动面板可以改变面板的位置。",
                children: [
                  "左边距：",
                  e?.pinPos ? e.pinPos.x + "px" : "-",
                  (0, _.jsx)("br", {}),
                  "上边距：",
                  e?.pinPos ? e.pinPos.y + "px" : "-",
                ],
              }),
              (0, _.jsx)(C.g, {
                helperText:
                  "勾选后，当你拖动窗口时，弹窗会自动切换为固定模式。",
                children: (0, _.jsx)(fn.Sc, {
                  labelElement: (0, _.jsx)(_.Fragment, {
                    children: "拖动窗口后自动切换为固定模式",
                  }),
                  checked: e ? e.pinAfterDrag : Kn.pinAfterDrag,
                  onChange: (e) => {
                    n({ pinAfterDrag: e.target.checked });
                  },
                }),
              }),
            ],
          });
        }
        const zn = E()(F.g2, [
            "button",
            "multiClick",
            "buttonAutoClose",
            "buttonHover",
            "buttonOffsetTop",
            "buttonOffsetLeft",
            "disableInTextarea",
            "domainBlackList",
            "domainWhiteList",
            "textList",
            "pin",
            "pinPos",
            "pinIgnoreDomainList",
            "modifierKeys",
            "modifierKeyPressedAction",
            "modifierKeyTranslate",
            "modifierKeyLink",
          ]),
          Hn = { host: "*", path: "/*" };
        function Un() {
          const [e, n] = (0, o.useState)(!1),
            [t, s] = (0, D.A)(zn),
            i = (e) => {
              s((n) => {
                const t = n.modifierKeys.indexOf(e);
                t >= 0 ? n.modifierKeys.splice(t, 1) : n.modifierKeys.push(e);
              });
            },
            l = !t?.modifierKeys.length,
            r = t?.domainBlackList,
            a = t?.domainWhiteList,
            c = (0, o.useMemo)(
              () =>
                !!r && r.some((e) => e.host === Hn.host && e.path === Hn.path),
              [r],
            ),
            [d, x] = (0, o.useState)(""),
            p = (0, o.useMemo)(() => Pn(d), [d]),
            {
              matchedRule: g,
              whiteListMatched: j,
              blackListMatched: m,
            } = (0, o.useMemo)(
              () =>
                p && r && a
                  ? An(p, r, a)
                  : {
                      matchedRule: void 0,
                      whiteListMatched: void 0,
                      blackListMatched: void 0,
                    },
              [r, a, p],
            ),
            y = !!t;
          return (
            (0, o.useEffect)(() => {
              if (y) {
                const e = decodeURI(window.location.hash.slice(1));
                e && ((window.location.hash = ""), (window.location.hash = e));
              }
            }, [y]),
            t
              ? (0, _.jsxs)("div", {
                  id: "selection",
                  style: { margin: 15 },
                  children: [
                    (0, _.jsxs)(Je.P, {
                      title: "关于网页划词翻译功能",
                      style: { marginBottom: 15 },
                      children: [
                        "网页划词翻译功能用于在网页内翻译你选中的文本。",
                        (0, _.jsx)("a", {
                          href: "https://hcfy.ai/docs/guides/cross",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          children: "查看网页划词翻译功能介绍",
                        }),
                      ],
                    }),
                    (0, _.jsxs)(u.Z, {
                      children: [
                        (0, _.jsx)(be.H4, { id: "辅助键", children: "辅助键" }),
                        (0, _.jsxs)(C.g, {
                          label: "选择辅助键",
                          helperText: (0, _.jsxs)(_.Fragment, {
                            children: [
                              "当选中的辅助键",
                              (0, _.jsx)("b", {
                                children: (0, _.jsx)("i", { children: "全部" }),
                              }),
                              "按下不放时会触发下面的操作。",
                            ],
                          }),
                          children: [
                            (0, _.jsx)(fn.Sc, {
                              inline: !0,
                              labelElement: (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)("kbd", { children: "Ctrl" }),
                                  "/",
                                  (0, _.jsx)("kbd", { children: "⌘" }),
                                ],
                              }),
                              checked: t.modifierKeys.includes("ctrl"),
                              onChange: () => {
                                i("ctrl");
                              },
                            }),
                            (0, _.jsx)(fn.Sc, {
                              inline: !0,
                              labelElement: (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)("kbd", { children: "Alt" }),
                                  "/",
                                  (0, _.jsx)("kbd", { children: "⌥" }),
                                ],
                              }),
                              checked: t.modifierKeys.includes("alt"),
                              onChange: () => {
                                i("alt");
                              },
                            }),
                            (0, _.jsx)(fn.Sc, {
                              inline: !0,
                              labelElement: (0, _.jsx)("kbd", {
                                children: "Shift",
                              }),
                              checked: t.modifierKeys.includes("shift"),
                              onChange: () => {
                                i("shift");
                              },
                            }),
                          ],
                        }),
                        (0, _.jsxs)(C.g, {
                          children: [
                            (0, _.jsxs)(se.z, {
                              inline: !0,
                              disabled: l,
                              label: "在按住辅助键不放的情况下：",
                              selectedValue: t.modifierKeyPressedAction,
                              onChange: (e) => {
                                s({
                                  modifierKeyPressedAction:
                                    e.currentTarget.value,
                                });
                              },
                              children: [
                                (0, _.jsx)(fn.sx, {
                                  label: "不选择",
                                  value: "",
                                }),
                                (0, _.jsx)(fn.sx, {
                                  label: "划词后直接弹出翻译结果",
                                  value: "selection",
                                }),
                                (0, _.jsx)(fn.sx, {
                                  label: "开启鼠标悬浮取词",
                                  value: "hover",
                                }),
                                1 === t.modifierKeys.length &&
                                  "ctrl" === t.modifierKeys[0] &&
                                  "selection" === t.modifierKeyPressedAction &&
                                  (0, _.jsxs)(Je.P, {
                                    intent: "warning",
                                    children: [
                                      "单独使用",
                                      (0, _.jsx)("kbd", { children: "Ctrl" }),
                                      "/",
                                      (0, _.jsx)("kbd", { children: "⌘" }),
                                      "作为辅助键时，选择“划词后直接弹出翻译结果”可能会导致你用",
                                      (0, _.jsx)("kbd", { children: "Ctrl" }),
                                      "/",
                                      (0, _.jsx)("kbd", { children: "⌘" }),
                                      "+",
                                      (0, _.jsx)("kbd", { children: "C" }),
                                      "复制文本时误触翻译。如果你遇到了这个问题，请替换或添加其它辅助键。",
                                    ],
                                  }),
                              ],
                            }),
                            (0, _.jsx)(fn.Sc, {
                              disabled: l,
                              label: "松开辅助键后，翻译页面中选中的文本",
                              checked: t.modifierKeyTranslate,
                              onChange: (e) => {
                                s({ modifierKeyTranslate: e.target.checked });
                              },
                            }),
                            1 === t.modifierKeys.length &&
                              "ctrl" === t.modifierKeys[0] &&
                              t.modifierKeyTranslate &&
                              (0, _.jsxs)(Je.P, {
                                intent: "warning",
                                children: [
                                  "单独使用",
                                  (0, _.jsx)("kbd", { children: "Ctrl" }),
                                  "/",
                                  (0, _.jsx)("kbd", { children: "⌘" }),
                                  "作为辅助键时，启用此选项会导致你在文本框中选中文本后，用",
                                  (0, _.jsx)("kbd", { children: "Ctrl" }),
                                  "/",
                                  (0, _.jsx)("kbd", { children: "⌘" }),
                                  "+",
                                  (0, _.jsx)("kbd", { children: "Space" }),
                                  "切换输入法时误触翻译。如果你想避免这个问题，请替换或添加其它辅助键。",
                                ],
                              }),
                            (0, _.jsx)(fn.Sc, {
                              disabled: l,
                              label: "按住辅助键不放时，让页面中的链接可被选中",
                              checked: t.modifierKeyLink,
                              onChange: (e) => {
                                s({ modifierKeyLink: e.target.checked });
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsxs)(u.Z, {
                      children: [
                        (0, _.jsx)(be.H4, {
                          id: "网址筛选",
                          children: "网址筛选",
                        }),
                        (0, _.jsx)("p", {
                          className: `${h.E4k} ${h.KJG}`,
                          children:
                            "划词翻译支持用黑 / 白名单规则控制在某些网址下是否启用网页划词。禁用了网页划词的页面在用鼠标划词后不会显示翻译按钮或翻译窗口，而且扩展图标会变为灰色，但你仍然可以使用辅助键、快捷键和右键菜单获取翻译结果。",
                        }),
                        (0, _.jsx)(C.g, {
                          helperText:
                            "勾选后，划词翻译在所有网站中划词后都不会显示翻译按钮 / 结果。",
                          children: (0, _.jsx)(fn.Sc, {
                            labelElement: (0, _.jsxs)(_.Fragment, {
                              children: [
                                "在所有网站中禁用网页划词 ",
                                (0, _.jsx)(Fn, {}),
                              ],
                            }),
                            checked: c,
                            onChange: (e) => {
                              const n = e.target.checked;
                              s((e) => {
                                const t = e.domainBlackList,
                                  s = t.findIndex(
                                    (e) =>
                                      e.host === Hn.host && e.path === Hn.path,
                                  );
                                (n && s >= 0) ||
                                  (!n && s < 0) ||
                                  (n ? t.unshift(Hn) : t.splice(s, 1));
                              });
                            },
                          }),
                        }),
                        (0, _.jsx)("p", {
                          children: (0, _.jsxs)(v.$, {
                            onClick: () => {
                              n((e) => !e);
                            },
                            children: [e ? "隐藏" : "显示", "黑 / 白名单规则"],
                          }),
                        }),
                        (0, _.jsx)("p", {
                          className: `${h.E4k} ${h.KJG}`,
                          children:
                            "通常情况下，你不需要手动修改黑 / 白名单规则，因为你可以在点击扩展图标后出现的弹窗中便捷的禁用 / 启用网页划词。",
                        }),
                        (0, _.jsxs)(vn.S, {
                          isOpen: e,
                          keepChildrenMounted: !0,
                          children: [
                            (0, _.jsxs)("div", {
                              className: "list",
                              children: [
                                (0, _.jsx)(Nn, {
                                  disabled: c,
                                  rules: t.domainBlackList,
                                  setRules: (e) => {
                                    s({ domainBlackList: e });
                                  },
                                  name: "黑名单",
                                }),
                                (0, _.jsx)(Nn, {
                                  disabled: c,
                                  rules: t.domainWhiteList,
                                  setRules: (e) => {
                                    s({ domainWhiteList: e });
                                  },
                                  name: "白名单",
                                }),
                              ],
                            }),
                            (0, _.jsx)(be.H6, { children: "测试黑 / 白名单" }),
                            (0, _.jsxs)(C.g, {
                              children: [
                                (0, _.jsx)(T.M, {
                                  value: d,
                                  onChange: (e) => {
                                    x(e.target.value.trim());
                                  },
                                  placeholder:
                                    "你可以填写一个网址来测试是否命中了黑名单或白名单",
                                }),
                                d &&
                                  !p &&
                                  (0, _.jsx)(Je.P, {
                                    intent: "warning",
                                    children: "网址格式不正确",
                                  }),
                                g &&
                                  (0, _.jsxs)(Je.P, {
                                    children: [
                                      m && "没有命中白名单且",
                                      "命中了",
                                      (0, _.jsxs)("b", {
                                        children: [j ? "白" : "黑", "名单"],
                                      }),
                                      "中的",
                                      " ",
                                      (0, _.jsx)(be.Cy, { children: wn(g) }),
                                      " 规则，此网址下会",
                                      (0, _.jsx)("b", {
                                        children: j ? "开启" : "关闭",
                                      }),
                                      "网页划词功能。",
                                    ],
                                  }),
                                p &&
                                  !m &&
                                  !j &&
                                  (0, _.jsx)(Je.P, {
                                    children:
                                      "既没有命中白名单，也没有命中黑名单，此网址下会开启网页划词功能。",
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, _.jsx)(C.g, {
                          helperText:
                            "勾选后，在固定模式下，无论当前页面是否处于黑 / 白名单中，划词后都会立刻显示翻译结果。",
                          children: (0, _.jsx)(fn.Sc, {
                            label: "固定模式下忽略黑 / 白名单规则",
                            checked: t
                              ? t.pinIgnoreDomainList
                              : zn.pinIgnoreDomainList,
                            onChange: () => {
                              s((e) => {
                                e.pinIgnoreDomainList = !e.pinIgnoreDomainList;
                              });
                            },
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(u.Z, {
                      children: [
                        (0, _.jsx)(be.H4, { children: "文本筛选" }),
                        (0, _.jsx)(C.g, {
                          children: t.textList.map((e) =>
                            (0, _.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, _.jsx)(fn.Sc, {
                                    disabled: c,
                                    label: e.name,
                                    checked: e.enabled,
                                    onChange: () => {
                                      return (
                                        (n = e),
                                        void s((e) => {
                                          const t = e.textList,
                                            s = (0, Rn.c2)(t).indexOf(n);
                                          if (s >= 0) {
                                            const e = t[s];
                                            e.enabled = !e.enabled;
                                          }
                                        })
                                      );
                                      var n;
                                    },
                                  }),
                                  (0, _.jsx)("p", {
                                    className: `${h.E4k} ${h.KJG}`,
                                    children: e.description,
                                  }),
                                ],
                              },
                              e.name,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(u.Z, {
                      children: [
                        (0, _.jsx)(be.H4, { children: "其它筛选" }),
                        (0, _.jsxs)(C.g, {
                          children: [
                            (0, _.jsx)(fn.Sc, {
                              label: "在文本框内划词后不触发翻译",
                              checked: t.disableInTextarea,
                              onChange: (e) => {
                                s({ disableInTextarea: e.target.checked });
                              },
                            }),
                            (0, _.jsx)("p", {
                              className: `${h.E4k} ${h.KJG}`,
                              children:
                                "勾选后，当你在文本框内划词时不会显示翻译按钮或翻译结果，也不会在固定模式时触发翻译。",
                            }),
                          ],
                        }),
                        (0, _.jsx)(On, {}),
                      ],
                    }),
                    (0, _.jsxs)(u.Z, {
                      children: [
                        (0, _.jsx)(be.H4, { children: "翻译按钮" }),
                        (0, _.jsxs)(C.g, {
                          label: "翻译按钮",
                          children: [
                            (0, _.jsx)(fn.Sc, {
                              disabled: c,
                              label: "划词后先显示翻译按钮",
                              checked: t.button,
                              onChange: (e) => {
                                s({ button: e.target.checked });
                              },
                            }),
                            (0, _.jsx)("p", {
                              className: `${h.E4k} ${h.KJG}`,
                              children:
                                "勾选后，划词之后会先显示翻译按钮，点击按钮后才会弹出翻译结果；如果不勾选，那么划词后会直接弹出翻译结果。",
                            }),
                          ],
                        }),
                        (0, _.jsxs)(C.g, {
                          label: "连击检测",
                          children: [
                            (0, _.jsxs)(se.z, {
                              selectedValue: t.multiClick,
                              onChange: (e) => {
                                s({ multiClick: e.currentTarget.value });
                              },
                              children: [
                                (0, _.jsx)(fn.sx, {
                                  label: "无",
                                  value: "close",
                                }),
                                (0, _.jsx)(fn.sx, {
                                  label: "双击时直接显示翻译结果",
                                  value: "double",
                                }),
                                (0, _.jsx)(fn.sx, {
                                  label: "三击时直接显示翻译结果",
                                  value: "triple",
                                }),
                              ],
                            }),
                            (0, _.jsx)("p", {
                              className: `${h.E4k} ${h.KJG}`,
                              children:
                                "即使网址在划词黑名单中，“双击 / 三击时直接显示翻译结果”依然会生效。",
                            }),
                          ],
                        }),
                        (0, _.jsxs)(C.g, {
                          children: [
                            (0, _.jsx)(fn.Sc, {
                              disabled: c || !t.button,
                              label: "自动隐藏",
                              checked: t.buttonAutoClose,
                              onChange: (e) => {
                                s({ buttonAutoClose: e.target.checked });
                              },
                            }),
                            (0, _.jsx)("p", {
                              className: `${h.E4k} ${h.KJG}`,
                              children: "勾选后，翻译按钮会在 2 秒后自动隐藏。",
                            }),
                          ],
                        }),
                        (0, _.jsxs)(C.g, {
                          children: [
                            (0, _.jsx)(fn.Sc, {
                              disabled: c || !t.button,
                              label: "鼠标移至按钮立刻翻译",
                              checked: t.buttonHover,
                              onChange: (e) => {
                                s({ buttonHover: e.target.checked });
                              },
                            }),
                            (0, _.jsx)("p", {
                              className: `${h.E4k} ${h.KJG}`,
                              children:
                                "勾选后，只要将鼠标移动到翻译按钮上就会立刻翻译，无需点击。",
                            }),
                          ],
                        }),
                        (0, _.jsx)(C.g, {
                          label: "按钮显示位置",
                          helperText:
                            "如果翻译按钮遮挡了其它扩展程序的按钮，你可以调整它的位置。设置为负数可以让按钮向下 / 向右偏移。",
                          children: (0, _.jsxs)("div", {
                            className: "btn-offset-option",
                            children: [
                              "向上偏移：",
                              (0, _.jsx)(bn.O, {
                                disabled: c || !t.button,
                                value: t.buttonOffsetTop,
                                onValueChange: (e) => {
                                  s({ buttonOffsetTop: e });
                                },
                                rightElement: (0, _.jsx)(kn.v, {
                                  children: "像素",
                                }),
                              }),
                              "向左偏移：",
                              (0, _.jsx)(bn.O, {
                                disabled: c || !t.button,
                                value: t.buttonOffsetLeft,
                                onValueChange: (e) => {
                                  s({ buttonOffsetLeft: e });
                                },
                                rightElement: (0, _.jsx)(kn.v, {
                                  children: "像素",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsx)(Bn, {}),
                  ],
                })
              : null
          );
        }
        var Vn = t(73345),
          qn = t(25812);
        const Yn = E()(F.g2, [
          "pageTrsApiOptions",
          "pageTrsEditable",
          "pageTrsSource",
          "pageTrsDest",
          "pageTrsPanelPos",
        ]);
        function Zn() {
          const [e, n] = (0, D.A)(Yn);
          return (0, _.jsxs)("div", {
            style: { margin: 15 },
            children: [
              (0, _.jsxs)(Je.P, {
                title: "关于网页全文翻译功能",
                style: { marginBottom: 15 },
                children: [
                  "网页全文翻译功能可以一次性翻译整个网页内的文本。",
                  (0, _.jsx)("a", {
                    href: "https://hcfy.ai/docs/guides/page",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "查看网页全文翻译功能介绍",
                  }),
                ],
              }),
              (0, _.jsx)(u.Z, {
                children: (0, _.jsx)(C.g, {
                  label: "突出显示译文",
                  helperText: (0, _.jsxs)(_.Fragment, {
                    children: [
                      "此选项已被",
                      (0, _.jsx)("a", {
                        href: (0, c.$P)("/appearance"),
                        children: "外观 - 网页全文翻译 - 译文样式",
                      }),
                      "替代。",
                    ],
                  }),
                }),
              }),
              (0, _.jsx)(u.Z, {
                children: (0, _.jsx)(C.g, {
                  inline: !0,
                  children: (0, _.jsx)(fn.Sc, {
                    label: "让译文可编辑",
                    checked: e ? e.pageTrsEditable : Yn.pageTrsEditable,
                    onChange: (e) => {
                      n({ pageTrsEditable: e.target.checked });
                    },
                  }),
                }),
              }),
              (0, _.jsx)(u.Z, {
                children: (0, _.jsx)(C.g, {
                  label: "可供选择的翻译服务",
                  helperText:
                    "注意：此设置项只是用来减少切换翻译服务时的下拉框选项个数的。如果你是想切换网页全文翻译使用的翻译服务，请在开启全文翻译后，将鼠标移动到网页右下角的划词翻译图标上。",
                  children: (0, _.jsx)(Vn.f, {
                    noBingDict: !0,
                    selectedAPIs: e?.pageTrsApiOptions || [],
                    onChange: (e) => {
                      n({ pageTrsApiOptions: e });
                    },
                  }),
                }),
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(C.g, {
                    label: "源语种",
                    inline: !0,
                    children: (0, _.jsx)(qn.A, {
                      size: "middle",
                      addAuto: !0,
                      lang: e ? e.pageTrsSource : Yn.pageTrsSource,
                      setLang: (e) => {
                        n({ pageTrsSource: e });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "目标语种",
                    inline: !0,
                    children: (0, _.jsx)(qn.A, {
                      size: "middle",
                      lang: e ? e.pageTrsDest[0] : Yn.pageTrsDest[0],
                      setLang: (e) => {
                        n({ pageTrsDest: [e] });
                      },
                    }),
                  }),
                ],
              }),
              (0, _.jsx)(u.Z, {
                children: (0, _.jsx)(C.g, {
                  label: "控制面板位置",
                  inline: !0,
                  children: (0, _.jsxs)(se.z, {
                    inline: !0,
                    onChange: (e) => {
                      n({ pageTrsPanelPos: e.target.value });
                    },
                    selectedValue: e ? e.pageTrsPanelPos : Yn.pageTrsPanelPos,
                    children: [
                      (0, _.jsx)(fn.sx, {
                        label: "右下",
                        value: "bottom-right",
                      }),
                      (0, _.jsx)(fn.sx, {
                        label: "左下",
                        value: "bottom-left",
                      }),
                      (0, _.jsx)(fn.sx, { label: "不显示", value: "hidden" }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function Gn() {
          const { t: e } = (0, l.Bd)(),
            n = (0, H.A)(() => chrome.extension.isAllowedIncognitoAccess(), []);
          return n.loading || !n.value || n.error
            ? null
            : (0, _.jsx)(Je.P, {
                icon: "info-sign",
                title: e("permission.incognitoTipTitle"),
                children: (0, _.jsx)("p", {
                  children: e("permission.incognitoTip"),
                }),
              });
        }
        const Wn = E()(F.g2, ["pdfStandalone"]);
        function Jn() {
          const [e, n] = (0, D.A)(Wn);
          return (0, _.jsx)(C.g, {
            helperText:
              "默认情况下，划词翻译会在新标签页中打开内置 PDF 阅读器，勾选此选项后则会在一个单独的窗口中打开，此窗口是类似于独立翻译窗口那种没有工具栏的窗口。",
            children: (0, _.jsx)(fn.Sc, {
              inline: !0,
              label: "在单独的窗口中打开",
              checked: e ? e.pdfStandalone : Wn.pdfStandalone,
              onChange: (e) => {
                n({ pdfStandalone: e.target.checked });
              },
            }),
          });
        }
        const Xn = E()(F.g2, ["pdfAuto", "pdfSnifferEnable"]);
        function Qn() {
          const [e, n] = (0, D.A)(Xn);
          return (0, _.jsxs)("div", {
            style: { margin: 15 },
            children: [
              (0, _.jsxs)(Je.P, {
                title: "关于内置 PDF 阅读器",
                style: { marginBottom: 15 },
                children: [
                  "在内置 PDF 阅读器中打开的 PDF 文件能正常使用网页划词 / 截图翻译等功能。",
                  (0, _.jsx)("a", {
                    href: "https://hcfy.ai/docs/guides/pdf",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "查看 PDF 翻译功能介绍",
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(C.g, {
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("p", {
                          children:
                            "开启后，点击一个 PDF 文件链接或将 PDF 文件拖放到浏览器中时，会自动跳转到划词翻译的内置 PDF 阅读器。",
                        }),
                        (0, _.jsx)("div", {
                          children:
                            "小提示：如果你希望打开划词翻译内置 PDF 阅读器的同时可以保留浏览器的原生 PDF 页面，那么你可以关闭此选项，并开启下方的“检测网页中的 PDF”。这样一来，划词翻译会在浏览器的原生 PDF 页面中提示你是否要在内置 PDF 阅读器中打开，打开之后原生 PDF 页面仍然会保留。",
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(fn.Sc, {
                      label: "自动打开 PDF",
                      checked: e ? e.pdfAuto : Xn.pdfAuto,
                      onChange: (e) => {
                        n({ pdfAuto: e.target.checked });
                      },
                    }),
                  }),
                  We ? (0, _.jsx)(tn, {}) : (0, _.jsx)(nn, {}),
                  (0, _.jsx)(Gn, {}),
                  (0, _.jsx)(Jn, {}),
                ],
              }),
              (0, _.jsx)(u.Z, {
                children: (0, _.jsx)(C.g, {
                  helperText:
                    "开启后，当网页里有 PDF 文件时，划词翻译会弹出在内置 PDF 阅读器里打开的提示。",
                  children: (0, _.jsx)(fn.Sc, {
                    label: "检测网页中的 PDF",
                    checked: e ? e.pdfSnifferEnable : Xn.pdfSnifferEnable,
                    onChange: (e) => {
                      n({ pdfSnifferEnable: e.target.checked });
                    },
                  }),
                }),
              }),
            ],
          });
        }
        function et(e) {
          const { service: n } = e,
            [t, s] = (0, o.useState)(!1),
            [i, l] = (0, o.useState)(!0);
          if (
            ((0, o.useEffect)(() => {
              n.pointsEnable &&
                (s(!0),
                n.pointsEnable.get().then((e) => {
                  (s(!1), l(e));
                }));
            }, [n]),
            !n.points)
          )
            return (0, _.jsxs)("div", {
              children: [n.name, "暂不支持通过套餐包 / 翻译积分使用。"],
            });
          const r = !n.secretKeys && !n.free;
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsxs)("p", {
                children: [n.name, "支持购买翻译积分直接使用。"],
              }),
              (0, _.jsx)(Re.m, {
                interactionKind: "hover-target",
                lazy: !0,
                content: (0, _.jsx)("div", {
                  style: { width: 250 },
                  children: r
                    ? `${n.name}只能通过翻译积分使用，无法停用。`
                    : i
                      ? (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)("b", { children: "停用后" }),
                            "，当你未配置密钥、或密钥免费额度用完后，划词翻译",
                            (0, _.jsx)("b", { children: "不会" }),
                            "自动消耗翻译积分使用",
                            n.name,
                            "。",
                          ],
                        })
                      : (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)("b", { children: "启用后" }),
                            "，当你未配置密钥、或密钥免费额度用完后，划词翻译",
                            (0, _.jsx)("b", { children: "会" }),
                            "自动消耗翻译积分使用",
                            n.name,
                            "。",
                          ],
                        }),
                }),
                children: (0, _.jsx)(v.A, {
                  loading: t,
                  disabled: r,
                  text: i ? "停用" : "启用",
                  onClick: () => {
                    n.pointsEnable
                      ? (s(!0),
                        n.pointsEnable.set(!i).then(() => {
                          (l(!i), s(!1));
                        }))
                      : alert(
                          `划词翻译内部错误：未给${n.name}声明启用 / 停用翻译积分的方法。`,
                        );
                  },
                }),
              }),
            ],
          });
        }
        t(30163);
        var nt = t(72431);
        function tt(e) {
          const { secretKeys: n, onChange: t, info: s } = e;
          if (!s)
            return (0, _.jsx)("div", {
              children: "此服务不支持自行申请密钥，或无需密钥即可使用。",
            });
          const i = (function (e) {
              let n = null;
              return (
                e.some((t, s) =>
                  e.some((e, i) => {
                    if (s !== i)
                      return t.key === e.key ? ((n = [s, i]), !0) : void 0;
                  }),
                ),
                n
              );
            })(n),
            l = !!s.idLabel,
            r = !!s.deeplProLabel,
            a = 3 + (l ? 1 : 0) + (r ? 1 : 0);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                style: { textAlign: "right" },
                children: (0, _.jsx)(v.$, {
                  icon: "add",
                  intent: "primary",
                  text: "添加密钥",
                  onClick: () => {
                    t(
                      (0, Rn.jM)(n, (e) => {
                        const n = { key: "" };
                        (l && (n.id = ""), r && (n.deeplPro = !1), e.push(n));
                      }),
                    );
                  },
                }),
              }),
              i &&
                (0, _.jsxs)(Je.P, {
                  intent: "warning",
                  children: [
                    "重复的",
                    s.keyLabel,
                    "：第 ",
                    i[0] + 1,
                    " 个跟第",
                    " ",
                    i[1] + 1,
                    " 个",
                  ],
                }),
              (0, _.jsxs)(Cn._, {
                compact: !0,
                bordered: !0,
                striped: !0,
                style: { width: "100%" },
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", {}),
                        l && (0, _.jsx)("th", { children: s.idLabel }),
                        (0, _.jsx)("th", { children: s.keyLabel }),
                        r && (0, _.jsx)("th", { children: s.deeplProLabel }),
                        (0, _.jsx)("th", {}),
                      ],
                    }),
                  }),
                  (0, _.jsxs)("tbody", {
                    children: [
                      !n.length &&
                        (0, _.jsx)("tr", {
                          children: (0, _.jsx)("td", {
                            colSpan: a,
                            style: { textAlign: "center" },
                            children: "未配置过密钥",
                          }),
                        }),
                      n.map((e, s) =>
                        (0, _.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, _.jsx)("td", { children: s + 1 }),
                              l &&
                                (0, _.jsx)("td", {
                                  children: (0, _.jsx)(T.M, {
                                    value: e.id,
                                    onChange: (e) => {
                                      const i = e.target.value.trim();
                                      t(
                                        (0, Rn.jM)(n, (e) => {
                                          e[s].id = i;
                                        }),
                                      );
                                    },
                                  }),
                                }),
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)(A, {
                                  value: e.key,
                                  onChange: (e) => {
                                    const i = e.target.value.trim();
                                    t(
                                      (0, Rn.jM)(n, (e) => {
                                        e[s].key = i;
                                      }),
                                    );
                                  },
                                }),
                              }),
                              r &&
                                (0, _.jsx)("td", {
                                  children: (0, _.jsxs)(se.z, {
                                    onChange: (e) => {
                                      const i = e.target.value;
                                      t(
                                        (0, Rn.jM)(n, (e) => {
                                          e[s].deeplPro = "Pro" === i;
                                        }),
                                      );
                                    },
                                    selectedValue: e.deeplPro ? "Pro" : "Free",
                                    children: [
                                      (0, _.jsx)(fn.sx, {
                                        label: "Free",
                                        value: "Free",
                                      }),
                                      (0, _.jsx)(fn.sx, {
                                        label: "Pro",
                                        value: "Pro",
                                      }),
                                    ],
                                  }),
                                }),
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)(v.$, {
                                  icon: "delete",
                                  onClick: () => {
                                    t(
                                      (0, Rn.jM)(n, (e) => {
                                        e.splice(s, 1);
                                      }),
                                    );
                                  },
                                }),
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        const st = {
          [nt.VI.ChatGPT]: {
            keyDocLink: "https://hcfy.ai/docs/services/chatgpt",
            keyLabel: "Secret Key",
          },
          [nt.VI.SiliConflow]: {
            keyDocLink: "https://hcfy.ai/docs/services/siliconflow",
            keyLabel: "API 密钥",
          },
          [nt.VI.Claude]: {
            keyDocLink: "https://hcfy.ai/docs/services/claude",
            keyLabel: "API key",
          },
          [nt.VI.Grok]: {
            keyDocLink: "https://hcfy.ai/docs/services/grok",
            keyLabel: "API key",
          },
          [nt.VI.TongYi]: {
            keyDocLink: "https://hcfy.ai/docs/services/tongyi",
            keyLabel: "API-Key",
          },
          [nt.VI.LingYi]: {
            keyDocLink: "https://hcfy.ai/docs/services/lingyi",
            keyLabel: "API Key",
          },
          [nt.VI.Moonshot]: {
            keyDocLink: "https://hcfy.ai/docs/services/moonshot",
            keyLabel: "API Key",
          },
          [nt.VI.DeepSeek]: {
            keyDocLink: "https://hcfy.ai/docs/services/deepseek",
            keyLabel: "API key",
          },
          [nt.VI.ZhiPu]: {
            keyDocLink: "https://hcfy.ai/docs/services/zhipu",
            keyLabel: "API key",
          },
          [nt.VI.DouBao]: {
            keyDocLink: "https://hcfy.ai/docs/services/doubao",
            keyLabel: "API Key",
          },
          [nt.VI.BaiChuan]: {
            keyDocLink: "https://hcfy.ai/docs/services/baichuan",
            keyLabel: "API Key",
          },
          [nt.VI.MiniMax]: {
            keyDocLink: "https://hcfy.ai/docs/services/minimax",
            keyLabel: "API 密钥",
          },
          [nt.VI.Gemini]: {
            keyDocLink: "https://hcfy.ai/docs/services/gemini",
            keyLabel: "API key",
          },
          [nt.VI.DeepLOfficial]: {
            keyDocLink: "https://hcfy.ai/docs/services/deepl",
            keyLabel: "Authentication Key",
            deeplProLabel: "接口类型",
          },
          [nt.VI.YouDao]: {
            keyDocLink: "https://hcfy.ai/docs/services/youdao-api",
            idLabel: "应用 ID",
            keyLabel: "应用密钥",
          },
          [nt.VI.WenXinNew]: {
            keyDocLink: "https://hcfy.ai/docs/services/wenxin-new",
            keyLabel: "API Key",
          },
          [nt.VI.WenXin]: {
            keyDocLink: "https://hcfy.ai/docs/services/wenxin",
            idLabel: "API Key",
            keyLabel: "Secret Key",
          },
          [nt.VI.QQ]: {
            keyDocLink: "https://hcfy.ai/docs/services/qq-api",
            idLabel: "SecretId",
            keyLabel: "SecretKey",
          },
          [nt.VI.HunYuan]: {
            keyDocLink: "https://hcfy.ai/docs/services/hunyuan",
            idLabel: "SecretId",
            keyLabel: "SecretKey",
          },
          [nt.VI.BaiDu]: {
            keyDocLink: "https://hcfy.ai/docs/services/baidu-api",
            idLabel: "APP ID",
            keyLabel: "密钥",
          },
          [nt.VI.BaiDuPro]: {
            keyDocLink: "https://hcfy.ai/docs/services/baidu-pro-api",
            idLabel: "APP ID",
            keyLabel: "密钥",
          },
          [nt.VI.ALi]: {
            keyDocLink: "https://hcfy.ai/docs/services/ali-api",
            idLabel: "AccessKey ID",
            keyLabel: "AccessKey Secret",
          },
          [nt.VI.ALiPro]: {
            keyDocLink: "https://hcfy.ai/docs/services/ali-pro-api",
            idLabel: "AccessKey ID",
            keyLabel: "AccessKey Secret",
          },
          [nt.VI.CaiYun]: {
            keyDocLink: "https://hcfy.ai/docs/services/caiyun-api",
            keyLabel: "Token",
          },
          [nt.VI.HuoShan]: {
            keyDocLink: "https://hcfy.ai/docs/services/hs-api",
            idLabel: "Access Key ID",
            keyLabel: "Secret Access Key",
          },
          [nt.P2.BaiDu]: {
            keyDocLink: "https://hcfy.ai/docs/services/baidu-ocr",
            idLabel: "API Key",
            keyLabel: "Secret Key",
          },
        };
        function it(e) {
          const { service: n, summary: t } = e,
            [s, i] = (0, o.useState)(!1),
            [l, r] = (0, o.useState)([]),
            a = st[n.id];
          if (
            ((0, o.useEffect)(() => {
              n.secretKeys && n.secretKeys.get().then(r);
            }, [n]),
            !n.secretKeys)
          )
            return (0, _.jsxs)("div", {
              children: [n.name, "暂不支持自行申请密钥使用。"],
            });
          const c = l.filter(n.secretKeys.isComplete).length;
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsxs)("p", {
                children: [
                  c
                    ? (0, _.jsxs)(_.Fragment, {
                        children: [
                          "已配置了",
                          " ",
                          (0, _.jsx)(kn.v, {
                            round: !0,
                            style: { fontSize: 12 },
                            children: c,
                          }),
                          " ",
                          "个密钥。",
                        ],
                      })
                    : "未配置密钥。",
                  t,
                ],
              }),
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(v.$, {
                    onClick: () => {
                      n.id !== nt.VI.ALiPro
                        ? n.id !== nt.VI.BaiDuPro
                          ? i(!0)
                          : window.alert(
                              "百度翻译（专业版）与百度翻译的密钥是共用的，你只需要管理百度翻译的密钥即可。",
                            )
                        : window.alert(
                            "阿里翻译（专业版）与阿里翻译的密钥是共用的，你只需要管理阿里翻译的密钥即可。",
                          );
                    },
                    children: "管理密钥",
                  }),
                  a?.keyDocLink &&
                    (0, _.jsx)("a", {
                      href: a.keyDocLink,
                      target: "_blank",
                      rel: "noreferrer",
                      style: { marginLeft: 15 },
                      children: "查看申请步骤",
                    }),
                ],
              }),
              (0, _.jsxs)(k.l, {
                title: `管理${n.name}的密钥`,
                isOpen: s,
                onClose: () => {
                  i(!1);
                },
                children: [
                  (0, _.jsx)(Be.R, {
                    useOverflowScrollContainer: !0,
                    children: (0, _.jsx)(tt, {
                      info: a,
                      secretKeys: l,
                      onChange: (e) => {
                        (r(e),
                          n.secretKeys
                            ? n.secretKeys.set(e)
                            : window.alert(
                                `划词翻译内部错误：${n.name}不支持通过密钥使用，却给用户显示了填写密钥的弹窗。`,
                              ));
                      },
                    }),
                  }),
                  (0, _.jsx)(ze.E, {
                    minimal: !0,
                    children: (0, _.jsx)("a", {
                      href: "https://hcfy.ai/docs/faqs/mutli-keys",
                      target: "_blank",
                      rel: "noreferrer",
                      children:
                        "填写多个密钥时，划词翻译是按照什么规则使用的？",
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function lt(e) {
          const {
              service: n,
              onClick: t,
              active: s,
              summary: i,
              secretKeySummary: l,
            } = e,
            [r, a] = (0, o.useState)("secretKey");
          return (
            (0, o.useEffect)(() => {
              n.secretKeys || (n.points ? a("points") : n.free && a("free"));
            }, [n]),
            (0, _.jsxs)(u.Z, {
              className: s ? "active" : void 0,
              children: [
                (0, _.jsxs)("div", {
                  className: "utils-flex",
                  style: { marginBottom: 10 },
                  children: [
                    (0, _.jsx)(be.H4, {
                      style: { marginBottom: 0 },
                      children: n.name,
                    }),
                    t &&
                      (s
                        ? (0, _.jsx)(kn.v, { children: "已选择此服务" })
                        : (0, _.jsx)(v.$, {
                            small: !0,
                            onClick: t,
                            text: "选择此服务",
                          })),
                  ],
                }),
                i && (0, _.jsx)("div", { className: h.E4k, children: i }),
                n.id !== nt.P2.Tesseract &&
                  (n.secretKeys || n.points || n.free) &&
                  (0, _.jsxs)(on.t, {
                    id: n.id,
                    selectedTabId: r,
                    onChange: (e) => a(e),
                    children: [
                      n.secretKeys &&
                        (0, _.jsx)(cn.o, {
                          id: "secretKey",
                          title: "自行申请",
                          panel: (0, _.jsx)(it, { service: n, summary: l }),
                        }),
                      n.package &&
                        (0, _.jsx)(cn.o, {
                          id: "package",
                          title: "套餐包",
                          panel: (0, _.jsx)("div", {
                            children: (0, _.jsxs)("p", {
                              children: [n.name, "支持通过套餐包使用。"],
                            }),
                          }),
                        }),
                      n.points &&
                        (0, _.jsx)(cn.o, {
                          id: "points",
                          title: "翻译积分",
                          panel: (0, _.jsx)(et, { service: n }),
                        }),
                      n.free &&
                        (0, _.jsx)(cn.o, {
                          id: "free",
                          title: "免费试用",
                          panel: (0, _.jsxs)("div", {
                            children: [
                              n.name,
                              "支持",
                              (0, _.jsx)("a", {
                                href: "https://hcfy.ai/docs/services/free/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "免费试用",
                              }),
                              "。",
                            ],
                          }),
                        }),
                    ],
                  }),
              ],
            })
          );
        }
        function rt(e) {
          const {
              name: n,
              description: t,
              services: s,
              summaryMap: i,
              selectedStorageKey: l,
            } = e,
            r = (0, o.useMemo)(() => {
              if (l) return { [l]: F.g2[l] };
            }, [l]),
            [a, c] = (0, D.A)(r),
            d = l ? a?.[l] : void 0,
            h = (0, o.useCallback)(
              (e) => {
                l && c({ [l]: e });
              },
              [l, c],
            );
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(be.H2, { children: n }),
              t && (0, _.jsx)("p", { children: t }),
              (0, _.jsx)("div", {
                className: "services-box",
                children: s.map((e) => {
                  const n = e.id;
                  return (0, _.jsx)(
                    lt,
                    {
                      service: e,
                      summary: i.common[n],
                      active: d ? d === n : void 0,
                      onClick: l
                        ? () => {
                            h(n);
                          }
                        : void 0,
                    },
                    n,
                  );
                }),
              }),
            ],
          });
        }
        t(42042);
        var at = t(46313),
          ot = t(88705),
          ct = t(3514),
          dt = t.n(ct);
        const ht = [
            "baiDuAppKey",
            "baiDuOCRKey",
            "youDaoAppKey",
            "aLiApiKey",
            "qqApiKey",
            "cyApiToken",
            "deeplKey",
            "hsApiKey",
            "chatGPTKey",
            "claudeKey",
            "siliConflowKey",
            "tongYiKey",
            "lingYiKey",
            "moonshotKey",
            "deepSeekKey",
            "zhiPuKey",
            "miniMaxKey",
            "baiChuanKey",
            "douBaoKey",
            "wenXinKey",
            "hunYuanKey",
            "geminiKey",
          ],
          xt = "3ehd39ehd";
        function ut(e) {
          return "string" == typeof e
            ? !e
            : "secret" in e
              ? !e.secret && !e.key
              : null == e.id
                ? !e.key
                : !e.key && !e.id;
        }
        async function pt() {
          const e = await chrome.storage.local.get(ht);
          if (
            ((n = e),
            Object.keys(n).every((e) => {
              const t = n[e];
              return (Array.isArray(t) ? t : [t]).every(ut);
            }))
          )
            throw new Error("未配置过服务，无需导出。");
          var n;
          const t = JSON.stringify(e);
          if (
            !(await (0, ce._)({
              action: "write to clipboard",
              text: ot.AES.encrypt(t, xt).toString(),
            }))
          )
            throw new Error("复制进剪切板失败。");
        }
        const gt = L(),
          jt = () => {
            pt().then(
              () => {
                gt.then((e) => {
                  e.show({
                    intent: "success",
                    message: "已将配置信息复制进剪切板。",
                  });
                });
              },
              (e) => {
                gt.then((n) => {
                  n.show({ intent: "warning", message: e.message });
                });
              },
            );
          };
        function mt(e) {
          const { onImported: n } = e,
            [t, s] = (0, o.useState)(!1),
            [i, l] = (0, o.useState)(""),
            [r, a] = (0, o.useState)(
              () => !!localStorage.getItem("exportkeystip"),
            ),
            [c, d] = (0, o.useState)(!1);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(v.$, {
                icon: "export",
                onClick: () => {
                  r ? jt() : d(!0);
                },
                style: { marginRight: 10 },
                children: "导出",
              }),
              (0, _.jsxs)(ve.F, {
                intent: "primary",
                confirmButtonText: "继续",
                isOpen: c,
                onConfirm: () => {
                  (a(!0),
                    localStorage.setItem("exportkeystip", "1"),
                    d(!1),
                    jt());
                },
                children: [
                  (0, _.jsxs)("p", {
                    children: [
                      "你可以将你的服务配置导出并导入进另一个浏览器的划词翻译里，",
                      (0, _.jsx)("b", {
                        children: "请不要将配置信息发送给其他人！",
                      }),
                    ],
                  }),
                  (0, _.jsxs)("p", {
                    children: [
                      "另外，",
                      (0, _.jsx)("b", {
                        children:
                          "不要将划词翻译 v8.7.0 及以上版本的配置导入到低于 v8.7.0 版本的划词翻译当中。",
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(v.$, {
                icon: "import",
                onClick: () => {
                  s(!0);
                },
                children: "导入",
              }),
              (0, _.jsx)(k.l, {
                title: "导入服务配置",
                isOpen: t,
                onClose: () => {
                  s(!1);
                },
                onClosed: () => {
                  l("");
                },
                children: (0, _.jsxs)("form", {
                  onSubmit: (e) => {
                    (e.preventDefault(),
                      (async function (e) {
                        const n = ot.AES.decrypt(e, xt).toString(ot.enc.Utf8);
                        let t;
                        try {
                          t = E()(JSON.parse(n), ht);
                        } catch (e) {
                          throw (
                            console.error("导入配置时出错：", e),
                            new Error("配置信息有误，无法导入。Code 1")
                          );
                        }
                        if (dt()(t))
                          throw new Error("配置信息有误，无法导入。Code 2");
                        await chrome.storage.local.set(t);
                      })(i).then(
                        () => {
                          (gt.then((e) => {
                            e.show({
                              intent: "success",
                              message: "导入成功。",
                            });
                          }),
                            s(!1),
                            n?.());
                        },
                        (e) => {
                          gt.then((n) => {
                            n.show({ intent: "danger", message: e.message });
                          });
                        },
                      ));
                  },
                  children: [
                    (0, _.jsx)("div", {
                      className: h.sar,
                      children: (0, _.jsx)(at.f, {
                        placeholder: "请将配置信息粘贴到这里。",
                        fill: !0,
                        required: !0,
                        value: i,
                        onChange: (e) => {
                          l(e.target.value);
                        },
                        autoFocus: !0,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: h.DBf,
                      children: (0, _.jsx)("div", {
                        className: h.Nu2,
                        children: (0, _.jsx)(v.$, {
                          intent: "primary",
                          type: "submit",
                          text: "导入",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var yt = t(18785),
          ft = t(6839),
          vt = t(5270);
        const bt = je()("web-speech"),
          kt = window.SpeechRecognition || window.webkitSpeechRecognition,
          Ct = !!kt;
        var Tt = (function (e) {
          return (
            (e.zh = "cnm-Hans-CN"),
            (e.enUS = "en-US"),
            (e.ja = "ja-JP"),
            (e.ko = "ko-KR"),
            (e.fr = "fr-FR"),
            (e.de = "de-DE"),
            (e.ru = "ru-RU"),
            e
          );
        })(Tt || {});
        const St = {
            [Tt.zh]: "中文(简体)",
            [Tt.enUS]: "英语(美国)",
            [Tt.ja]: "日语",
            [Tt.ko]: "韩语",
            [Tt.fr]: "法语",
            [Tt.de]: "德语",
            [Tt.ru]: "俄语",
          },
          wt = {
            "audio-capture": "你的电脑没有连接麦克风。",
            "no-speech": "没有检测到语音。",
            "not-allowed":
              "请在浏览器询问是否允许使用麦克风时选择“允许”。如果你之前选择过“禁止”，请点击浏览器地址栏左侧的锁或感叹号图标，然后将“麦克风”改为“允许”。如果浏览器从未询问过，则说明当前页面由于未知的原因不允许使用麦克风。",
            "service-not-allowed":
              "你的浏览器当前不允许使用划词翻译的内置语音识别服务。",
            network:
              "网络出错，请检查你的网络连接。注意：划词翻译内置的语音转文字服务需要能连接外网才可使用。",
            "language-not-supported": "你的浏览器不支持识别此语种。",
            aborted: "识别过程被中断了。",
            "bad-grammar": "语法错误。",
          },
          Pt = /\S/;
        const Et = {
          id: nt.eA.WebSpeech,
          name: "划词翻译内置语音转文字",
          realtime: !0,
          defaultLang: Tt.zh,
        };
        class _t extends vt.L {
          constructor() {
            super(Et);
          }
          async microphone(e) {
            const { lang: n, options: t } = e;
            if (!Ct)
              throw new Error(
                "划词翻译的内置语音转文字服务不支持在 Firefox 上使用，请选用腾讯云语音转文字服务。",
              );
            let s = !1,
              i = !1;
            const l = new kt();
            ((l.lang = n),
              (l.interimResults = !!t.onInterim),
              (l.continuous = !t.stopOnFirstSentence),
              l.addEventListener("error", (e) => {
                (bt("error 事件", e),
                  ("aborted" === e.error && s) ||
                    ((s = !0),
                    t.onError?.(
                      new Error(
                        `${wt[e.error] || e.error + ". "}${e.message || ""}`,
                      ),
                    )));
              }));
            const r = [];
            return (
              l.addEventListener("result", (e) => {
                const n = e.results[e.resultIndex],
                  s = n[0].transcript;
                if (n.isFinal) {
                  const e = s.replace(Pt, function (e) {
                    return e.toUpperCase();
                  });
                  (bt("识别到一句完整的话：", e), t.onSentence?.(e), r.push(e));
                } else (bt("识别到一句话的临时结果：", s), t.onInterim?.(s));
              }),
              l.addEventListener("nomatch", (e) => {
                (bt("nomatch 事件", e),
                  (i = !0),
                  t.onError?.(
                    new Error(
                      `${this.service.name}无法准确识别你的语音，请确保在安静的环境中，并吐字清晰。`,
                    ),
                  ));
              }),
              l.addEventListener("end", (e) => {
                (bt(
                  "end 事件",
                  e,
                  "识别出来的文本：",
                  r,
                  `是否已经中断：${s}`,
                  `是否已经 nomatch：${i}`,
                ),
                  s || i || t.onStop?.(r));
              }),
              l.start(),
              {
                stop: () => {
                  (bt("调用 stop 方法"), l.stop());
                },
                abort: () => {
                  (bt("调用 abort 方法"), (s = !0), l.abort());
                },
              }
            );
          }
          mediaStream(e) {
            return Promise.reject(
              new Error("划词翻译的内置语音转文字服务只支持通过麦克风使用。"),
            );
          }
        }
        const At = new _t(),
          Mt = [Et, ft.aN];
        (nt.eA.WebSpeech,
          nt.eA.TencentRealtime,
          ft.Er,
          nt.eA.WebSpeech,
          nt.eA.TencentRealtime,
          ft.AH);
        var Lt = t(50657),
          It = (t(45073), t(70475)),
          Nt = t(56357);
        const Rt = {
            workerPath: "worker.min.js",
            corePath: "tesseract-core.js",
            workerBlobURL: !1,
          },
          Ft = { id: nt.P2.Tesseract, name: "Tesseract OCR", free: !0 };
        class Dt extends Nt.m {
          constructor() {
            super(Ft);
          }
          async callByFree(e) {
            const n = {
                ...Rt,
                langPath: `https://unpkg.com/@tesseract.js-data/${e.lang}@1.0.0/4.0.0_best_int`,
              },
              t = await (0, It.createWorker)(e.lang, void 0, n);
            await t.setParameters({
              tessjs_create_hocr: "0",
              tessjs_create_tsv: "0",
              preserve_interword_spaces: "1",
            });
            const s = await t.recognize(e.image, {}, { blocks: !0 });
            return (await t.terminate(), s.data);
          }
          transform(e) {
            return e.blocks
              ? e.blocks
                  .flatMap((e) => e.paragraphs)
                  .map((e) => e.text.trim().replace(/\r?\n/g, " "))
                  .join("\n")
              : e.text || "";
          }
        }
        new Dt();
        const Ot = [Ft, Lt.n0],
          $t = E()(F.Ne, ["tipForServicesUpdateClosed"]);
        function Kt() {
          const [e, n] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              chrome.storage.local
                .get($t)
                .then(({ tipForServicesUpdateClosed: e }) => {
                  e || n(!0);
                });
            }, []),
            (0, _.jsxs)(k.l, {
              title: "从 v8.7.0 起，划词翻译对第三方服务做了一些改进",
              isOpen: e,
              canEscapeKeyClose: !1,
              canOutsideClickClose: !1,
              isCloseButtonShown: !1,
              children: [
                (0, _.jsx)("div", {
                  className: h.sar,
                  children: (0, _.jsxs)(be.UL, {
                    children: [
                      (0, _.jsx)("li", { children: "现已支持填写多组密钥。" }),
                      (0, _.jsxs)("li", {
                        children: [
                          (0, _.jsx)("p", {
                            children:
                              "当一个服务的所有密钥都报错之后（例如密钥填写有误、免费额度用完了等错误），划词翻译会自动消耗翻译积分使用此服务。如果你不希望这样，你可以停用某个服务的翻译积分。",
                          }),
                          (0, _.jsx)("div", {
                            className: h.E4k,
                            children:
                              "每个服务的翻译积分都是默认启用的，但如果你在上个版本中给某个服务填写过密钥，那么划词翻译会停用此服务的翻译积分，避免在你不知情的情况下消耗你的积分。你可以给这些服务重新启用翻译积分。",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)("div", {
                  className: h.DBf,
                  children: (0, _.jsx)("div", {
                    className: h.Nu2,
                    children: (0, _.jsx)(v.$, {
                      intent: "primary",
                      onClick: () => {
                        (n(!1),
                          chrome.storage.local.set({
                            tipForServicesUpdateClosed: !0,
                          }));
                      },
                      children: "我知道了",
                    }),
                  }),
                }),
              ],
            })
          );
        }
        const Bt = {
          common: {
            [nt.VI.BaiDuPro]: (0, _.jsx)("p", {
              children:
                "支持五个专业领域：网络文学、金融财经、科技电子、水利机械、生物医药。",
            }),
            [nt.VI.BingDict]: (0, _.jsx)("p", {
              children: "仅有词典，无法用于翻译句子。",
            }),
            [nt.VI.ALiPro]: (0, _.jsx)("p", {
              children:
                "支持十一个专业领域。前往左侧的【第三方服务】里找到【百度翻译（专业版）】，即可修改专业领域。",
            }),
            [nt.VI.SouGou]: (0, _.jsxs)("p", {
              children: [
                "搜狗翻译已下线。",
                (0, _.jsx)("a", {
                  href: "https://hcfy.ai/blog/2021/11/23/sougou-off",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "查看公告",
                }),
              ],
            }),
            [nt.P2.Tesseract]: (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)("p", {
                  children: [
                    (0, _.jsx)("a", {
                      href: "https://github.com/tesseract-ocr/tesseract#readme",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Tesseract OCR",
                    }),
                    " ",
                    "无需翻译积分或密钥即可免费使用，但是：",
                  ],
                }),
                (0, _.jsxs)(be.UL, {
                  children: [
                    (0, _.jsx)("li", {
                      children: "识别时间较长，大约需要 2 ~ 8 秒。",
                    }),
                    (0, _.jsx)("li", { children: "准确率相对较低。" }),
                    (0, _.jsx)("li", {
                      children:
                        "不能自动判断图片里的语种，识别前需要手动指定。",
                    }),
                    (0, _.jsx)("li", {
                      children: "会占用一定的系统资源，偶尔会导致电脑卡顿。",
                    }),
                  ],
                }),
              ],
            }),
            [nt.P2.BaiDu]: (0, _.jsxs)(be.UL, {
              children: [
                (0, _.jsx)("li", { children: "识别时间只需 1 秒不到。" }),
                (0, _.jsx)("li", { children: "准确率高。" }),
                (0, _.jsx)("li", {
                  children: "能自动判断图片里的语种，无需手动指定。",
                }),
                (0, _.jsx)("li", { children: "不占用系统资源。" }),
              ],
            }),
            [nt.eA.WebSpeech]: (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("p", {
                  children:
                    "划词翻译内置的语音转文字服务无需翻译积分或密钥即可免费使用，但是：",
                }),
                (0, _.jsxs)(be.UL, {
                  children: [
                    (0, _.jsx)("li", { children: "需要能连接外网才能使用。" }),
                    (0, _.jsx)("li", {
                      children: "只能通过麦克风使用，不能用于音视频翻译功能。",
                    }),
                    (0, _.jsx)("li", { children: "不支持 Firefox 浏览器。" }),
                  ],
                }),
              ],
            }),
            [nt.eA.TencentRealtime]: (0, _.jsxs)(be.UL, {
              children: [
                (0, _.jsx)("li", { children: "无需连接外网即可使用。" }),
                (0, _.jsx)("li", {
                  children: "既可以通过麦克风使用，也可以用于音视频翻译功能。",
                }),
                (0, _.jsx)("li", { children: "支持 Firefox 浏览器。" }),
              ],
            }),
          },
        };
        function zt() {
          const e = (0, c.Zp)(),
            [n] = (0, c.ok)(),
            t = n.get("buy");
          (0, o.useEffect)(() => {
            t && e("/store");
          }, [t, e]);
          const [s, i] = (0, o.useState)(!0),
            l = (0, o.useCallback)(() => {
              (i(!1),
                setTimeout(() => {
                  i(!0);
                }));
            }, []);
          return (0, _.jsxs)("div", {
            id: "services",
            children: [
              (0, _.jsx)(Kt, {}),
              (0, _.jsx)(Je.P, {
                title: "关于第三方服务",
                children: (0, _.jsxs)("p", {
                  children: [
                    "若要使用下面这些第三方服务，你可以：",
                    (0, _.jsxs)(be.UL, {
                      children: [
                        (0, _.jsxs)("li", {
                          children: [
                            "免费试用的服务可以无需配置直接使用，但是会有一些缺点比如速度慢、不稳定等。",
                            (0, _.jsx)("a", {
                              href: "https://hcfy.ai/docs/services/free",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "查看免费试用的说明",
                            }),
                          ],
                        }),
                        (0, _.jsx)("li", { children: "自行申请。" }),
                        (0, _.jsxs)("li", {
                          children: [
                            "购买套餐包或者翻译积分直接使用，部分服务的价格比官方价格要低很多。",
                            (0, _.jsx)(v.$, {
                              style: { margin: "0 5px" },
                              large: !0,
                              intent: "success",
                              onClick: () => {
                                e("/store");
                              },
                              children: "点击前往购买",
                            }),
                          ],
                        }),
                      ],
                    }),
                    "相关问题：",
                    (0, _.jsx)("a", {
                      href: "https://hcfy.ai/docs/faqs/why-apply",
                      target: "_blank",
                      rel: "noreferrer noopener",
                      children:
                        "为什么这些服务需要自行申请 / 购买套餐包或翻译积分后才能使用？",
                    }),
                  ],
                }),
              }),
              (0, _.jsxs)(Je.P, {
                intent: "primary",
                icon: null,
                style: { margin: "15px 0" },
                children: [
                  "密钥配置信息：",
                  (0, _.jsx)(mt, { onImported: l }),
                  (0, _.jsx)("span", {
                    className: `${h.KJG} ${h.E4k}`,
                    style: { marginLeft: 15 },
                    children:
                      "你可以将你配置的密钥导出并导入到另一个浏览器的划词翻译中。",
                  }),
                ],
              }),
              s &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(rt, {
                      name: "翻译服务",
                      services: yt.v,
                      summaryMap: Bt,
                    }),
                    (0, _.jsx)(rt, {
                      name: "图片转文字（OCR）服务",
                      description:
                        "截图翻译和图片翻译功能会使用你选择的服务将图片转为文字。",
                      services: Ot,
                      summaryMap: Bt,
                      selectedStorageKey: "ocrService",
                    }),
                    (0, _.jsx)(rt, {
                      name: "语音转文字服务",
                      description:
                        "语音翻译和音视频翻译功能会使用这些服务将语音转为文字。",
                      services: Mt,
                      summaryMap: Bt,
                    }),
                  ],
                }),
            ],
          });
        }
        var Ht = t(61350),
          Ut = t(67396);
        class Vt extends Ut.Ay {
          constructor() {
            (super("hcfy"),
              this.version(3).stores({
                historyRecords: "id,date,_id,syncStatus",
                favorites: "id,date,text,_id,syncStatus",
              }),
              (this.historyRecords = this.table("historyRecords")),
              (this.favorites = this.table("favorites")));
          }
        }
        const qt = new Vt();
        (t(55367),
          t(79276),
          t(85100),
          t(27162),
          t(66403),
          t(94154),
          t(64777),
          t(16465),
          t(62896));
        var Yt = t(79071),
          Zt = t.n(Yt),
          Gt = t(38285),
          Wt = t.n(Gt);
        const Jt = (e, n) => {
          e._id
            ? ((e.deleted = !0), (e.syncStatus = Xt.Pending))
            : delete n.value;
        };
        let Xt = (function (e) {
          return ((e.Pending = "Pending"), e);
        })({});
        class Qt {
          constructor(e, n, t, s, i, l, r, a) {
            ((this.table = e),
              (this.syncKeys = n.concat("date")),
              (this.getDataFromServer = t),
              (this.syncTimeStorageKey = s),
              (this.deleteData = i),
              (this.commitChanges = l),
              (this.pullChanges = r),
              (this.deleteLogsFn = a));
          }
          async add(e, n) {
            const t = { ...e },
              s = Date.now();
            ((t.id = Wt()(s + "-")),
              (t.date = s),
              (t.syncStatus = Xt.Pending),
              await this.table.add(t),
              n && this.commit().catch(Zt()));
          }
          async deleteById(e, n) {
            (await this.table.where("id").anyOf(e).modify(Jt),
              n && this.commit().catch(Zt()));
          }
          async deleteAll(e) {
            let n;
            (e && (n = await this.deleteData()),
              await this.table.clear(),
              n && (await this.setSyncTime(n)));
          }
          async deleteByKey(e, n, t) {
            (await this.table.where(e).equalsIgnoreCase(n).modify(Jt),
              t && this.commit().catch(Zt()));
          }
          async hasByKey(e, n) {
            return (
              (await this.table
                .where(e)
                .equalsIgnoreCase(n)
                .and((e) => !e.deleted)
                .count()) > 0
            );
          }
          query(e, n, t) {
            const s = n
              ? this.table.where("date").below(n).reverse()
              : this.table.orderBy("date").reverse();
            return (
              s.filter(t ? (e) => !e.deleted && t(e) : (e) => !e.deleted),
              s.limit(e).toArray()
            );
          }
          queryAll() {
            return this.table
              .orderBy("date")
              .reverse()
              .filter((e) => !e.deleted)
              .toArray();
          }
          async getSyncChanges() {
            const e = await this.table
                .where("syncStatus")
                .equals(Xt.Pending)
                .toArray(),
              n = [],
              t = [],
              s = [];
            return (
              e.forEach((e) => {
                e._id
                  ? e.deleted && s.push(e._id)
                  : (n.push(E()(e, this.syncKeys)), t.push(e.id));
              }),
              {
                changes: {
                  added: dt()(n) ? void 0 : n,
                  deleted: dt()(s) ? void 0 : s,
                },
                addedLocalIds: t,
              }
            );
          }
          addServerData(e) {
            return qt.transaction("rw", this.table, async () => {
              const n = Date.now() + "-",
                t = e.map((e) => ((e.id = Wt()(n)), e._id));
              (await this.table.where("_id").anyOf(t).delete(),
                await this.table.bulkAdd(e));
            });
          }
          async downloadData(e) {
            const n = await this.getDataFromServer(e),
              t = n.list;
            return (
              Array.isArray(t) && t.length && (await this.addServerData(t)),
              n.date
            );
          }
          setSyncTime(e) {
            return chrome.storage.local.set({ [this.syncTimeStorageKey]: e });
          }
          async commit() {
            const { changes: e, addedLocalIds: n } =
                await this.getSyncChanges(),
              t = await this.commitChanges(e);
            dt()(t) ||
              (await this.table
                .where("id")
                .anyOf(n)
                .modify((e) => {
                  const s = n.indexOf(e.id);
                  s >= 0 && ((e._id = t[s]), delete e.syncStatus);
                }));
          }
          async pull(e) {
            const n = (await chrome.storage.local.get(this.syncTimeStorageKey))[
              this.syncTimeStorageKey
            ];
            if (!n) {
              const e = await this.downloadData();
              return (
                await this.setSyncTime(e),
                this.deleteLogsFn(e).catch(Zt()),
                !0
              );
            }
            if (!e) return !1;
            const { changes: t, date: s } = await this.pullChanges(n);
            let i;
            const l = t.reduce(
              (e, n) =>
                n.deleteAll
                  ? (e.added.clear(), e.deleted.clear(), (i = !0), e)
                  : (n.added?.forEach((n) => {
                      e.added.add(n);
                    }),
                    n.deleted?.forEach((n) => {
                      e.added.has(n) ? e.added.delete(n) : e.deleted.add(n);
                    }),
                    e),
              { added: new Set(), deleted: new Set() },
            );
            let r,
              a = [];
            const o = !!l.added.size;
            l.added.size &&
              ((a = await this.table
                .where("_id")
                .anyOf(Array.from(l.added))
                .toArray()),
              a.forEach((e) => {
                l.added.delete(e._id);
              }),
              l.added.size &&
                (r = (await this.getDataFromServer(Array.from(l.added))).list));
            const c = i || !!r || !!l.deleted.size;
            return (
              c &&
                (await qt.transaction("rw", this.table, async () => {
                  i &&
                    (await this.table.clear(),
                    dt()(a) || (await this.table.bulkAdd(a)));
                  const e = [];
                  return (
                    r && e.push(this.addServerData(r)),
                    l.deleted.size &&
                      e.push(
                        this.table
                          .where("_id")
                          .anyOf(Array.from(l.deleted))
                          .delete(),
                      ),
                    Promise.all(e)
                  );
                })),
              await this.setSyncTime(s),
              (c || o) && this.deleteLogsFn(s).catch(Zt()),
              c
            );
          }
        }
        var es = t(17546),
          ns = t.n(es);
        t(77948);
        const ts = new Qt(
          qt.favorites,
          ["text", "dir"],
          (e) =>
            (0, S.cN)("/favorites", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            }),
          "favoritesSyncAt",
          () => (0, S.cN)("/favorites", { method: "DELETE" }),
          (e) =>
            (0, S.cN)("/favorites", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            }),
          (e) => (0, S.cN)("/favorites?lastCheck=" + e),
          (e) => (0, S.cN)("/favorites/logs?date=" + e, { method: "DELETE" }),
        );
        function ss(e, n, t) {
          let s;
          if (t) {
            const e = t.toLocaleLowerCase();
            s = (n) => {
              if (n.text.toLocaleLowerCase().includes(e)) return !0;
              const t = n.results;
              return (
                !!t &&
                Object.keys(t).some((n) => {
                  const s = t[n];
                  return (
                    !!s &&
                    (!!s.dict?.some((n) =>
                      n.terms.some((n) => n.includes(e)),
                    ) ||
                      !!s.result?.some((n) => n.includes(e)))
                  );
                })
              );
            };
          }
          return ts.query(e, n, s);
        }
        var is = t(98087),
          ls = t.n(is);
        const rs = {
            end: !0,
            rows: [],
            loading: !1,
            selectedRows: [],
            searchText: "",
            latestDate: void 0,
          },
          as = (e, n) =>
            (0, Rn.jM)(e, (e) => {
              switch (n.type) {
                case "reset":
                  return rs;
                case "set":
                  return void n.cb(e);
                case "set latestDate": {
                  const n = ls()(e.rows);
                  return n
                    ? void (e.latestDate = n.date)
                    : void (e.latestDate = void 0);
                }
                case "append data":
                  if (((e.end = n.data.length < 100), !n.data.length)) return;
                  return void e.rows.push(...n.data);
                case "switch-check": {
                  const t = e.selectedRows.indexOf(n.id);
                  return void (t >= 0
                    ? e.selectedRows.splice(t, 1)
                    : e.selectedRows.push(n.id));
                }
              }
            });
        function os(e, n, t) {
          const [s, i] = (0, o.useState)(0),
            [l, r] = (0, o.useReducer)(as, rs),
            a = (0, o.useCallback)(() => {
              r({ type: "set latestDate" });
            }, []);
          ((0, o.useEffect)(() => {
            if (l.end) return;
            const e = () => {
              document.documentElement.scrollTop + window.innerHeight ===
                document.documentElement.scrollHeight && a();
            };
            return (
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, [a, l.end]),
            (0, o.useEffect)(() => {
              let n = !1;
              return (
                r({
                  type: "set",
                  cb(e) {
                    e.loading = !0;
                  },
                }),
                e(100, l.latestDate, l.searchText).then((e) => {
                  n ||
                    (r({
                      type: "set",
                      cb(e) {
                        e.loading = !1;
                      },
                    }),
                    r({ type: "append data", data: e }));
                }),
                () => {
                  n = !0;
                }
              );
            }, [l.searchText, l.latestDate, s, e]));
          return (
            (0, o.useEffect)(() => {
              n &&
                t.pull((0, Te.Rc)(n)).then((e) => {
                  e && (r({ type: "reset" }), i((e) => e + 1));
                });
            }, [t, n]),
            {
              tableData: l,
              queryNextPage: a,
              deleteSelected: () =>
                t.deleteById(l.selectedRows, !!n && (0, Te.Rc)(n)).then(() => {
                  r({
                    type: "set",
                    cb(e) {
                      ((e.rows = e.rows.filter(
                        (e) => !l.selectedRows.includes(e.id),
                      )),
                        (e.selectedRows = []));
                    },
                  });
                }),
              clearData: () =>
                t.deleteAll(!!n).then(() => {
                  r({
                    type: "set",
                    cb(e) {
                      ((e.selectedRows = []),
                        (e.end = !0),
                        (e.rows = []),
                        (e.latestDate = void 0),
                        (e.searchText = ""));
                    },
                  });
                }),
              setSearchText: (e) => {
                r({
                  type: "set",
                  cb(n) {
                    e !== n.searchText &&
                      ((n.end = !0),
                      (n.rows = []),
                      (n.searchText = e.trim()),
                      (n.latestDate = void 0));
                  },
                });
              },
              cancelSelected: () => {
                r({
                  type: "set",
                  cb(e) {
                    e.selectedRows = [];
                  },
                });
              },
              switchCheck: (e) => {
                r({ type: "switch-check", id: e });
              },
            }
          );
        }
        var cs = t(53373),
          ds = t.n(cs),
          hs = (t(45950), t(66126)),
          xs = t(12752),
          us = t(76352);
        async function ps(e) {
          (0, ce._)({ action: "audio", url: e }).catch((e) => {
            console.error(e);
          });
        }
        function gs(e) {
          const n = e.uri,
            t = e.size,
            s = e.style;
          return (0, _.jsx)(v.$, {
            style: s,
            icon: (0, _.jsx)(Q.I, { icon: "volume-up", size: vs[t] }),
            small: "small" === t,
            large: "large" === t,
            minimal: !0,
            disabled: !n,
            onClick: n ? () => ps(n) : void 0,
            title: n ? "朗读" : "不支持此语种",
          });
        }
        function js(e, n) {
          const t = "GoogleWeb" === n,
            s = [];
          return (
            !e.phonetic ||
              (t && !e.dict) ||
              s.push(
                e.phonetic.map(
                  (e) => `${e.name ? e.name + " " : ""}/${e.value}/`,
                ),
              ),
            e.dict
              ? s.push(
                  ...e.dict.map(
                    (e) =>
                      `${e.pos ? e.pos + (t ? ": " : " ") : ""}${e.terms.join(", ")}`,
                  ),
                )
              : e.result && s.push(...e.result),
            (0, ce._)({ action: "write to clipboard", text: s.join("\n") })
          );
        }
        function ms(e) {
          e.stopPropagation();
        }
        const ys = /\b[A-Z\s\-'a-z]+\b/g;
        function fs(e, n) {
          const t = Array.from(e.matchAll(ys)),
            s = e.split(ys);
          return (0, _.jsx)(_.Fragment, {
            children: s.map((e, s) => {
              const i = t[s];
              return (0, _.jsxs)(
                o.Fragment,
                {
                  children: [
                    e,
                    i
                      ? (0, _.jsx)("a", {
                          onClick: () => n(i[0]),
                          children: i[0],
                        })
                      : "",
                  ],
                },
                s,
              );
            }),
          });
        }
        const vs = { small: 12, middle: 16, large: 20 };
        function bs(e) {
          switch (e) {
            case "美":
              return "英语(美国)";
            case "英":
              return "英语(英国)";
            default:
              return;
          }
        }
        const ks = {
          ...E()(F.g2, "googleHidePhonetic"),
          ...E()(F.Ne, [
            "tipForGoogleTranslateClosed",
            "tipForDeepLLimitClosed",
          ]),
        };
        function Cs(e) {
          const {
              apiId: n,
              result: { loading: t, result: s } = { loading: !1, result: null },
              queryResult: i,
              autoCopy: l = !1,
              autoPlay: r = !1,
              wordClickable: a = !0,
              setQuery: c = Zt(),
              size: d = "small",
              collapse: x,
              onCollapseChange: p,
              portalContainer: g,
            } = e,
            [j, m] = (0, D.A)(ks),
            y = vs[d],
            f = "small" === d,
            b = "large" === d,
            [k, C] = (0, o.useState)("duplicate"),
            [T, S] = (0, o.useState)(),
            w = yt.v.find((e) => e.id === n) || { name: n, id: n },
            P = "GoogleWeb" === n && !!j?.googleHidePhonetic,
            E = () => {
              (C("tick"),
                S("success"),
                window.setTimeout(() => {
                  (C("duplicate"), S(void 0));
                }, 1e3));
            };
          ((0, o.useEffect)(() => {
            s &&
              r &&
              s.text.length < 30 &&
              ps({
                apiId: n,
                source: s.from,
                text: s.text,
                ttsURI: s.phonetic?.[0].ttsURI || s.ttsURI,
              });
          }, [n, r, s]),
            (0, o.useEffect)(() => {
              s &&
                l &&
                js(s, n).then(
                  (e) => {
                    e
                      ? E()
                      : window.alert("自动复制翻译结果失败，请稍后重试。");
                  },
                  (e) => {
                    window.alert(
                      `自动复制翻译结果时发生了一个错误：${e?.message}`,
                    );
                  },
                );
            }, [s, l, n]));
          const A = xs.K[n];
          return (0, _.jsxs)(u.Z, {
            className: "result-block",
            onClick: ms,
            children: [
              "GoogleWeb" === n &&
                !j?.tipForGoogleTranslateClosed &&
                (0, _.jsxs)(Je.P, {
                  intent: "warning",
                  icon: null,
                  children: [
                    (0, _.jsx)("p", {
                      children: "谷歌翻译可能需要额外配置才能使用。",
                    }),
                    (0, _.jsx)(v.A, {
                      small: !0,
                      style: { visibility: "visible" },
                      intent: "primary",
                      href: "https://hcfy.ai/blog/2022/09/28/ggg",
                      target: "_blank",
                      children: "查看详情",
                    }),
                    (0, _.jsx)("a", {
                      style: { marginLeft: 15 },
                      onClick: () => {
                        m({ tipForGoogleTranslateClosed: !0 });
                      },
                      children: "不再提示",
                    }),
                  ],
                }),
              "DeepLWeb" === n &&
                !j?.tipForDeepLLimitClosed &&
                (0, _.jsxs)(Je.P, {
                  intent: "warning",
                  icon: null,
                  children: [
                    (0, _.jsx)("p", {
                      children:
                        "DeepL 首次翻译速度较慢，请耐心等待。若遇到问题（报错、翻译结果不全等）请点击下方按钮。",
                    }),
                    (0, _.jsx)(v.A, {
                      small: !0,
                      style: { visibility: "visible" },
                      intent: "primary",
                      href: "https://hcfy.ai/docs/services/free/#deepl",
                      target: "_blank",
                      children: "查看解决方案",
                    }),
                    (0, _.jsx)("a", {
                      style: { marginLeft: 15 },
                      onClick: () => {
                        m({ tipForDeepLLimitClosed: !0 });
                      },
                      children: "不再提示",
                    }),
                  ],
                }),
              (0, _.jsxs)("div", {
                className: "legend",
                children: [
                  (0, _.jsxs)("div", {
                    className: "legend-left",
                    children: [
                      (0, _.jsx)("span", {
                        className: "api-ico",
                        style: A ? { backgroundImage: `url(${A})` } : void 0,
                      }),
                      (0, _.jsx)(be.H6, { children: w.name }),
                      s &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(qn.A, {
                              lang: s.from,
                              setLang: i,
                              size: "small",
                              maxHeight: 212,
                              portalContainer: g,
                              children: (0, _.jsxs)("span", {
                                className: "source",
                                children: [
                                  (0, _.jsx)("span", {
                                    className: "source-text",
                                    children: s.from,
                                  }),
                                  (0, _.jsx)(Q.I, {
                                    icon: "caret-down",
                                    size: 12,
                                  }),
                                ],
                              }),
                            }),
                            (0, _.jsx)(gs, {
                              uri: {
                                apiId: n,
                                source: s.from,
                                text: s.text,
                                ttsURI: s.phonetic?.[0].ttsURI || s.ttsURI,
                              },
                              size: d,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    style: { flexShrink: 0 },
                    children: [
                      void 0 !== x &&
                        (0, _.jsx)(v.$, {
                          minimal: !0,
                          small: f,
                          large: b,
                          title: x ? "展开" : "收起",
                          onClick: () => {
                            p && p(!x);
                          },
                          icon: (0, _.jsx)(Q.I, {
                            icon: x ? "chevron-down" : "chevron-up",
                            size: y + 2,
                          }),
                        }),
                      (0, _.jsx)(v.$, {
                        onClick: () => {
                          s &&
                            js(s, n).then(
                              (e) => {
                                e
                                  ? E()
                                  : window.alert(
                                      "复制翻译结果失败，请稍后重试。",
                                    );
                              },
                              (e) => {
                                window.alert(
                                  `复制翻译结果时发生了一个错误：${e?.message}`,
                                );
                              },
                            );
                        },
                        disabled: !s || !!s.error,
                        icon: (0, _.jsx)(Q.I, { icon: k, size: y }),
                        minimal: !0,
                        small: f,
                        large: b,
                        intent: T,
                        title: "复制翻译结果",
                      }),
                      (0, _.jsx)(v.A, {
                        disabled: !s?.link,
                        target: "_blank",
                        href: s?.link || "",
                        icon: (0, _.jsx)(Q.I, { icon: "share", size: y }),
                        minimal: !0,
                        small: f,
                        large: b,
                        title: "查看详细结果",
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(vn.S, {
                isOpen: !x,
                children: [
                  (0, _.jsxs)("div", {
                    style: { display: t ? "block" : "none" },
                    children: [
                      (0, _.jsx)("p", {
                        className: ds()({ [h.w24]: t }),
                        children: "1",
                      }),
                      (0, _.jsx)("p", {
                        className: ds()({ [h.w24]: t }),
                        style: { width: "150px" },
                        children: "1",
                      }),
                    ],
                  }),
                  s?.error &&
                    (0, _.jsx)("div", {
                      className: "error",
                      children: (0, _.jsx)(us.Q, {
                        error: s.error,
                        onRetry: () => i(),
                      }),
                    }),
                  s?.phonetic &&
                    !P &&
                    (0, _.jsx)("div", {
                      className: "phonetic",
                      children: s.phonetic.map((e, t) =>
                        (0, _.jsxs)(
                          "div",
                          {
                            className: "phonetic-item",
                            style: { maxWidth: "100%" },
                            children: [
                              e.name &&
                                (0, _.jsx)("span", {
                                  style: { flexShrink: 0, marginRight: 5 },
                                  children: e.name,
                                }),
                              e.value &&
                                (0, _.jsxs)(hs.A, {
                                  children: ["/", e.value, "/"],
                                }),
                              e.ttsURI &&
                                (0, _.jsx)(gs, {
                                  style: { flexShrink: 0 },
                                  uri: {
                                    apiId: n,
                                    source: bs(e.name) || s.from,
                                    text: s.text,
                                    ttsURI: e.ttsURI,
                                  },
                                  size: d,
                                }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  s &&
                    (0, _.jsxs)("div", {
                      className: "common-result",
                      children: [
                        s.dict &&
                          (0, _.jsx)("div", {
                            className: "dict",
                            children: s.dict.map((e, n) => {
                              const t = e.terms.join(", ");
                              return (0, _.jsxs)(
                                "p",
                                {
                                  children: [
                                    e.pos &&
                                      (0, _.jsx)("span", {
                                        className: "dict-pos",
                                        children: e.pos,
                                      }),
                                    a ? fs(t, c) : t,
                                  ],
                                },
                                n,
                              );
                            }),
                          }),
                        !s.dict &&
                          s.result &&
                          (0, _.jsx)("div", {
                            className: "general-result",
                            children: s.result.map((e, t) =>
                              (0, _.jsxs)(
                                "p",
                                {
                                  children: [
                                    e,
                                    (0, _.jsx)(gs, {
                                      uri: { text: e, apiId: n, source: s?.to },
                                      size: d,
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        const Ts = ["GoogleWeb", "BingDictWeb"];
        function Ss(e) {
          const { item: n, selected: t, switchSelected: s } = e,
            [i, l] = (0, o.useState)({});
          return (
            (0, o.useEffect)(() => {
              n.results && l(n.results);
            }, [n]),
            (0, o.useEffect)(() => {
              if (n.results) return;
              const e = n.dir;
              if (e) {
                const t = {};
                Promise.all(
                  Ts.map((s) =>
                    (async (e, n, t, s) => {
                      try {
                        return await (0, ce._)({
                          action: "translate",
                          data: {
                            apiCode: n,
                            text: e,
                            source: t,
                            destinations: [s],
                          },
                        });
                      } catch (e) {
                        console.error("翻译失败：", e);
                      }
                    })(n.text, s, e.from, e.to).then((e) => {
                      e && (t[s] = e);
                    }),
                  ),
                ).then(() => {
                  (l(t), ts.table.update(n.id, { results: t }));
                });
              }
            }, [n]),
            (0, _.jsxs)(u.Z, {
              className: ds()("favorite-item", { active: t }),
              interactive: !0,
              onClick: () => {
                s(n.id);
              },
              children: [
                (0, _.jsx)(be.H4, { children: n.text }),
                Object.keys(i).map((e) =>
                  (0, _.jsx)(
                    Cs,
                    {
                      apiId: e,
                      result: { loading: !1, result: i[e] || null },
                      queryResult: Zt(),
                      wordClickable: !1,
                    },
                    e,
                  ),
                ),
              ],
            })
          );
        }
        var ws = t(38232);
        const Ps = ["_id", "id", "date", "syncStatus", "deleted"];
        function Es() {
          return (0, _.jsx)(_e.A, {
            placement: "bottom",
            interactionKind: "hover",
            content: (0, _.jsxs)(p.W, {
              children: [
                (0, _.jsx)(g.D, {
                  text: "CSV",
                  onClick: () => {
                    ts.queryAll().then((e) => {
                      const n = (function (e) {
                        const n = [["原文", "翻译结果", "来源"].join(",")];
                        return (
                          e.forEach((e) => {
                            let t = "",
                              s = "";
                            if (e.results)
                              if (
                                e.results.BingDictWeb &&
                                e.results.BingDictWeb.dict
                              )
                                ((t = e.results.BingDictWeb.dict
                                  .map((e) => `${e.pos} ${e.terms.join("，")}`)
                                  .join("；")),
                                  (s = "BingDictWeb"));
                              else {
                                let n = "";
                                (ns()(e.results, (e, i) => {
                                  if (e)
                                    return e.dict
                                      ? ((t = e.dict
                                          .map(
                                            (e) =>
                                              `${e.pos} ${e.terms.join("，")}`,
                                          )
                                          .join("；")),
                                        (s = i),
                                        !1)
                                      : void (
                                          !n &&
                                          e.result &&
                                          ((n = e.result.join("；")), (s = i))
                                        );
                                }),
                                  t || (t = n));
                              }
                            n.push([e.text, t, s].join(","));
                          }),
                          n.join("\n")
                        );
                      })(e);
                      (0, ws.WN)(
                        new Blob([n], { type: "text/csv" }),
                        "划词翻译收藏夹.csv",
                      );
                    });
                  },
                }),
                (0, _.jsx)(g.D, {
                  text: "JSON",
                  onClick: () => {
                    ts.queryAll().then((e) => {
                      const n = (function (e) {
                        return JSON.stringify(
                          e,
                          (e, n) => {
                            if (!Ps.includes(e)) return n;
                          },
                          2,
                        );
                      })(e);
                      (0, ws.WN)(
                        new Blob([n], { type: "application/json" }),
                        "划词翻译收藏夹.json",
                      );
                    });
                  },
                }),
              ],
            }),
            children: (0, _.jsx)(v.$, {
              rightIcon: "caret-down",
              text: "导出为…",
            }),
          });
        }
        const _s = E()(F.g2, ["favoritesEnabled"]);
        function As() {
          const [e, n] = (0, D.A)(_s),
            t = e || _s,
            { setShowVip: s } = (0, o.useContext)(Se),
            i = (0, o.useContext)(O),
            [l, r] = (0, o.useState)(!1),
            [a, c] = (0, o.useState)(!1),
            {
              tableData: d,
              queryNextPage: h,
              deleteSelected: x,
              clearData: u,
              setSearchText: p,
              cancelSelected: g,
              switchCheck: j,
            } = os(ss, i, ts);
          return (0, _.jsxs)("div", {
            id: "favorites",
            children: [
              (0, _.jsx)(ve.F, {
                cancelButtonText: "取消",
                confirmButtonText: "确定",
                intent: "danger",
                isOpen: l,
                icon: "trash",
                onClose: (e) => {
                  (e && x(), r(!1));
                },
                children: (0, _.jsx)("p", { children: "确定要删除吗？" }),
              }),
              (0, _.jsx)(ve.F, {
                cancelButtonText: "取消",
                confirmButtonText: "确定",
                icon: "trash",
                intent: "danger",
                isOpen: a,
                onClose: (e) => {
                  (e && u(), c(!1));
                },
                children: (0, _.jsx)("p", { children: "确定要清空收藏夹吗？" }),
              }),
              (0, _.jsxs)("div", {
                className: "actions",
                children: [
                  (0, _.jsxs)("div", {
                    className: "actions-left",
                    children: [
                      (0, _.jsx)(T.M, {
                        className: "search-input",
                        placeholder: "搜索收藏夹",
                        rightElement: d.searchText
                          ? (0, _.jsx)(v.$, {
                              icon: "cross",
                              minimal: !0,
                              onClick: () => {
                                p("");
                              },
                            })
                          : void 0,
                        value: d.searchText,
                        onChange: (e) => {
                          const n = e.target.value;
                          p(n);
                        },
                      }),
                      d.selectedRows.length
                        ? (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(v.$, {
                                text: `删除选中的收藏（${d.selectedRows.length}）`,
                                intent: "primary",
                                style: { marginLeft: "10px" },
                                onClick: () => {
                                  r(!0);
                                },
                              }),
                              (0, _.jsx)(v.$, {
                                style: { margin: "0 10px" },
                                text: "取消选择",
                                onClick: g,
                              }),
                              (0, _.jsx)(v.$, {
                                intent: "danger",
                                text: "清空收藏夹",
                                onClick: () => {
                                  c(!0);
                                },
                              }),
                            ],
                          })
                        : void 0,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: "actions-right",
                    children: [
                      !(0, Te.Rc)(i) &&
                        (0, _.jsx)("a", {
                          style: { marginRight: 15 },
                          onClick: () => s(!0),
                          children: "将收藏夹同步到云端",
                        }),
                      (0, _.jsx)(fn.Sc, {
                        label: "启用收藏功能",
                        inline: !0,
                        checked: t.favoritesEnabled,
                        onChange: (e) => {
                          n({ favoritesEnabled: e.target.checked });
                        },
                      }),
                      (0, _.jsx)(Es, {}),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: "actions-bg",
                style: { height: "60px" },
              }),
              (0, _.jsx)("div", {
                className: "favorite-list",
                children: d.rows.map((e) =>
                  (0, _.jsx)(
                    Ss,
                    {
                      item: e,
                      selected: d.selectedRows.includes(e.id),
                      switchSelected: j,
                    },
                    e.id,
                  ),
                ),
              }),
              !d.loading &&
                !d.end &&
                (0, _.jsx)(v.$, { onClick: h, text: "加载更多" }),
              d.loading && (0, _.jsx)(Ht.y, {}),
              !d.loading &&
                !d.rows.length &&
                (0, _.jsx)(Ae.I, {
                  icon: "blank",
                  title: d.searchText ? "没有搜索结果" : "无收藏",
                  description: t.favoritesEnabled
                    ? "如果你不需要收藏功能，可以取消勾选上方的“启用收藏功能”，这样翻译面板上的收藏图标就会消失。"
                    : "",
                }),
            ],
          });
        }
        const Ms = Ye
          ? Ze
            ? "https://microsoftedge.microsoft.com/addons/detail/oikmahiipjniocckomdccmplodldodja"
            : "https://chrome.google.com/webstore/detail/ikhdkkncnoglghljlkmcimlnlhkeamad"
          : "https://addons.mozilla.org/zh-CN/firefox/addon/hcfy/";
        function Ls() {
          return (0, _.jsxs)("div", {
            style: { margin: "15px" },
            children: [
              (0, _.jsx)(be.H2, { id: "关于", children: "关于划词翻译" }),
              (0, _.jsx)("p", {
                children:
                  "划词翻译是一款简单好用的翻译软件，支持桌面端的 Chrome、Edge 和 Firefox 浏览器。",
              }),
              (0, _.jsxs)("p", {
                children: [
                  "划词翻译由我个人创建于 2013 年，并持续维护至今。",
                  (0, _.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://hcfy.ai/docs/histroy",
                    children: "查看划词翻译大事记",
                  }),
                ],
              }),
              (0, _.jsx)("p", {
                children: "如果你觉得划词翻译很好用，请给它一个五星好评！",
              }),
              (0, _.jsx)("p", {
                children: (0, _.jsx)(v.A, {
                  text: "给划词翻译一个五星好评",
                  href: Ms,
                  target: "_blank",
                  rel: "noreferrer",
                }),
              }),
            ],
          });
        }
        t(47146);
        var Is = t(95132),
          Ns = (function (e) {
            return ((e.g = "g"), (e.i = "i"), (e.m = "m"), e);
          })(Ns || {});
        const Rs = [Ns.g, Ns.i, Ns.m],
          Fs = { [Ns.g]: "全局匹配", [Ns.i]: "忽略大小写", [Ns.m]: "多行匹配" },
          Ds = (e) => Fs[e];
        function Os(e) {
          const { selected: n, setSelected: t } = e,
            s = (0, o.useCallback)(
              (e) => {
                t((n) => {
                  const t = n.indexOf(e);
                  return t < 0 ? n : n.slice(0, t) + n.slice(t + 1);
                });
              },
              [t],
            ),
            i = (0, o.useCallback)(
              (e, { handleClick: t, modifiers: s }) =>
                (0, _.jsx)(
                  g.D,
                  {
                    icon: n.includes(e) ? "tick" : "blank",
                    onClick: t,
                    active: s.active,
                    text: Fs[e],
                  },
                  e,
                ),
              [n],
            );
          return (0, _.jsx)(Is.K, {
            tagRenderer: Ds,
            tagInputProps: { inputProps: { readOnly: !0 } },
            items: Rs,
            onRemove: s,
            itemRenderer: i,
            onItemSelect: (e) => {
              t((n) => {
                const t = n.indexOf(e);
                return t < 0 ? n + e : n.slice(0, t) + n.slice(t + 1);
              });
            },
            selectedItems: n.split(""),
          });
        }
        const $s = { pattern: "", flags: "gi", replaceTo: "" };
        function Ks(e) {
          const { show: n, hideDialog: t, onAdd: s } = e,
            [i, l] = (0, o.useState)($s),
            r = (0, o.useCallback)((e) => {
              l((n) => ({ ...n, flags: e(n.flags) }));
            }, []),
            a = (0, o.useRef)(null),
            [c, d] = (0, o.useState)(""),
            [x, u] = (0, o.useState)(""),
            [p, g] = (0, o.useState)(null),
            [j, m] = (0, o.useState)(!1);
          ((0, o.useEffect)(() => {
            let e;
            try {
              ((e = new RegExp(i.pattern, i.flags)), m(!1));
            } catch (e) {
              return (
                console.error("正则表达式语法错误：", e),
                m(!0),
                void g(null)
              );
            }
            g(i.pattern ? e : null);
          }, [i.flags, i.pattern]),
            (0, o.useEffect)(() => {
              u(p && c ? c.replace(p, i.replaceTo) : "");
            }, [p, i.replaceTo, c]));
          return (0, _.jsx)(k.l, {
            title: "添加源文本替换正则",
            canOutsideClickClose: !1,
            isOpen: n,
            onClose: t,
            onClosed: () => {
              (l($s), d(""));
            },
            onOpened: () => {
              a.current?.focus();
            },
            children: (0, _.jsxs)("form", {
              onSubmit: (e) => {
                (e.preventDefault(), !j && i.pattern && (t(), s(i)));
              },
              children: [
                (0, _.jsxs)("div", {
                  className: h.sar,
                  children: [
                    (0, _.jsx)(C.g, {
                      label: "正则",
                      labelFor: "input-pattern",
                      children: (0, _.jsx)("input", {
                        id: "input-pattern",
                        className: `${h.bOq} ${h.I5l}`,
                        ref: a,
                        value: i.pattern,
                        required: !0,
                        onChange: (e) => {
                          const n = e.target.value;
                          l((e) => ({ ...e, pattern: n }));
                        },
                      }),
                    }),
                    (0, _.jsx)(C.g, {
                      label: "标识",
                      children: (0, _.jsx)(Os, {
                        selected: i.flags,
                        setSelected: r,
                      }),
                    }),
                    (0, _.jsx)(C.g, {
                      label: "替换为",
                      labelFor: "input-replace-to",
                      children: (0, _.jsx)("input", {
                        id: "input-replace-to",
                        className: `${h.bOq} ${h.I5l}`,
                        value: i.replaceTo,
                        onChange: (e) => {
                          const n = e.target.value;
                          l((e) => ({ ...e, replaceTo: n }));
                        },
                      }),
                    }),
                    j &&
                      (0, _.jsx)(Je.P, {
                        intent: "danger",
                        title: "正则有误",
                        style: { marginBottom: 10 },
                      }),
                    (0, _.jsxs)("div", {
                      className: `${h.E4k} ${h.KJG}`,
                      children: [
                        (0, _.jsx)("p", {
                          children: "以上配置等同于下面这行 JavaScript 代码：",
                        }),
                        (0, _.jsxs)(be.AC, {
                          style: { whiteSpace: "break-spaces" },
                          children: [
                            '"',
                            c.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                            '".replace(new RegExp("',
                            i.pattern
                              .replace(/\\/g, "\\\\")
                              .replace(/"/g, '\\"'),
                            '", "',
                            i.flags,
                            '"), "',
                            i.replaceTo.replace(/"/g, '\\"'),
                            '")',
                          ],
                        }),
                        (0, _.jsxs)("p", {
                          children: [
                            "相关文档：",
                            (0, _.jsx)("a", {
                              href: "https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/global_objects/regexp/regexp",
                              target: "_blank",
                              rel: "noreferrer noopener",
                              children: "RegExp 构造函数",
                            }),
                            " ",
                            "|",
                            " ",
                            (0, _.jsx)("a", {
                              href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
                              target: "_blank",
                              rel: "noreferrer noopener",
                              children: "String.prototype.replace() 方法",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)("p", {
                      children: (0, _.jsx)(at.f, {
                        fill: !0,
                        placeholder: "在此输入文本可以测试正则",
                        value: c,
                        onChange: (e) => {
                          d(e.target.value);
                        },
                      }),
                    }),
                    c &&
                      p &&
                      (0, _.jsxs)("div", {
                        className: `${h.E4k} ${h.KJG}`,
                        children: [
                          (0, _.jsx)("p", { children: "以上文本会被替换为：" }),
                          (0, _.jsx)(be.AC, {
                            style: { whiteSpace: "break-spaces" },
                            children: x,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: h.DBf,
                  children: (0, _.jsxs)("div", {
                    className: h.Nu2,
                    children: [
                      (0, _.jsx)(v.$, { onClick: t, children: "取消" }),
                      (0, _.jsx)(v.$, {
                        type: "submit",
                        intent: "primary",
                        children: "添加",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Bs(e) {
          const { regexps: n, setRegexps: t } = e,
            [s, i] = (0, o.useState)(!1);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("p", {
                className: h.cmW,
                children: [
                  "除了使用上面预定义的替换功能，你还可以使用",
                  (0, _.jsx)("a", {
                    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "正则表达式",
                  }),
                  "自行添加源文本替换逻辑。",
                  (0, _.jsx)(v.$, {
                    intent: "primary",
                    icon: "add",
                    small: !0,
                    onClick: () => i(!0),
                    children: "添加正则表达式",
                  }),
                ],
              }),
              (0, _.jsxs)(Cn._, {
                compact: !0,
                bordered: !0,
                striped: !0,
                style: { width: "100%" },
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", { children: "正则表达式" }),
                        (0, _.jsx)("th", { children: "替换为" }),
                        (0, _.jsx)("th", {}),
                      ],
                    }),
                  }),
                  (0, _.jsxs)("tbody", {
                    children: [
                      n.map((e, s) =>
                        (0, _.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)(be.Cy, {
                                  children: (0, _.jsxs)("pre", {
                                    style: { display: "inline" },
                                    children: ["/", e.pattern, "/", e.flags],
                                  }),
                                }),
                              }),
                              (0, _.jsx)("td", {
                                children: e.replaceTo
                                  ? (0, _.jsx)(be.Cy, { children: e.replaceTo })
                                  : "从源文本中删除",
                              }),
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)(v.$, {
                                  icon: "delete",
                                  small: !0,
                                  onClick: () => {
                                    t(
                                      (0, Rn.jM)(n, (e) => {
                                        e.splice(s, 1);
                                      }),
                                    );
                                  },
                                  children: "删除",
                                }),
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                      !n.length &&
                        (0, _.jsx)("tr", {
                          children: (0, _.jsx)("td", {
                            colSpan: 3,
                            style: { textAlign: "center" },
                            children: "未添加正则表达式",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(Ks, {
                show: s,
                hideDialog: () => i(!1),
                onAdd: (e) => {
                  t(
                    (0, Rn.jM)(n, (n) => {
                      n.push(e);
                    }),
                  );
                },
              }),
            ],
          });
        }
        const zs = E()(F.g2, [
          "sourceTransformNoBr",
          "sourceTransformNCaml",
          "sourceTransformNoComment",
          "sourceLower",
          "sourceTransformRegExps",
        ]);
        function Hs() {
          const [e, n] = (0, D.A)(zs);
          return (0, _.jsxs)(C.g, {
            className: "inline-form-group-label",
            children: [
              (0, _.jsx)(fn.Sc, {
                labelElement: (0, _.jsxs)(_.Fragment, {
                  children: [
                    "将换行符替换成空格",
                    (0, _.jsxs)(Fe, {
                      children: [
                        "部分网站如",
                        " ",
                        (0, _.jsx)("a", {
                          href: "https://www.rfc-editor.org/rfc/rfc6633.txt",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "RFCs 文档站",
                        }),
                        "在文本中自行加入了换行符，这导致翻译结果不是按照完整的句子翻译的，勾选此选项即可将源文本里的所有换行符替换成空格。",
                      ],
                    }),
                  ],
                }),
                inline: !0,
                checked: e ? e.sourceTransformNoBr : zs.sourceTransformNoBr,
                onChange: (e) => {
                  n({ sourceTransformNoBr: e.target.checked });
                },
              }),
              (0, _.jsx)(fn.Sc, {
                labelElement: (0, _.jsxs)(_.Fragment, {
                  children: [
                    "将双斜线（//）替换成空格",
                    (0, _.jsx)(Fe, {
                      children:
                        "部分代码使用双斜线 // 作为代码注释，勾选此选项即可去掉文本中的所有双斜线。如果同时勾选了“将换行符替换成空格”，则可以正常翻译多行注释。",
                    }),
                  ],
                }),
                inline: !0,
                checked: e
                  ? e.sourceTransformNoComment
                  : zs.sourceTransformNoComment,
                onChange: (e) => {
                  n({ sourceTransformNoComment: e.target.checked });
                },
              }),
              (0, _.jsx)(fn.Sc, {
                labelElement: (0, _.jsxs)(_.Fragment, {
                  children: [
                    "将所有字母转为小写",
                    (0, _.jsx)(Fe, {
                      children:
                        "全大写的单词在翻译 / 朗读时可能会被误认为是缩写，勾选此选项后可将源文本中的所有字母转为小写。",
                    }),
                  ],
                }),
                inline: !0,
                checked: e ? e.sourceLower : zs.sourceLower,
                onChange: (e) => {
                  n({ sourceLower: e.target.checked });
                },
              }),
              (0, _.jsx)(fn.Sc, {
                labelElement: (0, _.jsxs)(_.Fragment, {
                  children: [
                    "转换驼峰式和下划线式词组",
                    (0, _.jsx)(Fe, {
                      children:
                        "部分网站如 GitHub 里查看代码时，有很多驼峰式或下划线式的词组如“someData”、“click_by_someone”，勾选此选项后则会转换成“some data”、“click by someone”这类形式。",
                    }),
                  ],
                }),
                inline: !0,
                checked: e ? e.sourceTransformNCaml : zs.sourceTransformNCaml,
                onChange: (e) => {
                  n({ sourceTransformNCaml: e.target.checked });
                },
              }),
              (0, _.jsx)(Bs, {
                regexps: e ? e.sourceTransformRegExps : [],
                setRegexps: (e) => {
                  n({ sourceTransformRegExps: e });
                },
              }),
            ],
          });
        }
        var Us = t(88190),
          Vs = t(3040);
        function qs(e) {
          const { selected: n, onChange: t } = e;
          return (0, _.jsx)(Us.x, {
            items: Vs.j,
            selected: n,
            onChange: t,
            labelKey: "name",
            valueKey: "id",
            itemRenderer: (e, n, t, s, i) =>
              (0, _.jsxs)(
                "div",
                {
                  children: [
                    (0, _.jsx)(fn.Sc, {
                      inline: !0,
                      labelElement: n,
                      checked: s,
                      onChange: (e) => {
                        i(e.target.checked);
                      },
                    }),
                    (0, _.jsx)(v.A, {
                      minimal: !0,
                      small: !0,
                      icon: (0, _.jsx)(Q.I, { icon: "share", size: 12 }),
                      target: "_blank",
                      href: e.home,
                    }),
                  ],
                },
                t,
              ),
          });
        }
        const Ys = { name: "", link: "", menu: !1, panel: !1 },
          Zs = [
            {
              name: "谷歌搜索",
              link: "https://www.google.com/search?q=%s",
              menu: !0,
              panel: !0,
            },
            {
              name: "百度搜索",
              link: "https://www.baidu.com/s?wd=%s",
              menu: !0,
              panel: !0,
            },
            {
              name: "维基百科",
              link: "https://zh.wikipedia.org/w/index.php?search=%s",
              menu: !0,
              panel: !0,
            },
            {
              name: "剑桥词典",
              link: "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/%s",
              menu: !0,
              panel: !0,
            },
          ];
        function Gs(e) {
          const { options: n, setOptions: t } = e,
            [s, i] = (0, o.useState)(!1),
            [l, r] = (0, o.useState)(-1),
            [a, c] = (0, o.useState)(!1),
            [d, x] = (0, o.useState)(-1),
            [u, p] = (0, o.useState)(Ys),
            [g, j] = (0, o.useState)(!1),
            m = (0, o.useRef)(null);
          return (0, _.jsxs)(C.g, {
            helperText: (0, _.jsxs)(_.Fragment, {
              children: [
                "快捷链接是基于你所划选的文本生成的链接。",
                (0, _.jsx)("a", {
                  style: { marginRight: 10 },
                  onClick: () => j((e) => !e),
                  children: "查看教程",
                }),
                (0, _.jsx)("a", {
                  href: "https://github.com/lmk123/crx-selection-translate/discussions/945",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "分享你的或查看其他人的快捷链接",
                }),
              ],
            }),
            children: [
              (0, _.jsx)(k.l, {
                isOpen: g,
                title: "如何配置快捷链接",
                onClose: () => j(!1),
                children: (0, _.jsxs)("div", {
                  className: h.sar,
                  children: [
                    (0, _.jsx)("p", { children: "以百度搜索为例：" }),
                    (0, _.jsxs)(be.OL, {
                      children: [
                        (0, _.jsxs)("li", {
                          children: [
                            "打开",
                            (0, _.jsx)("a", {
                              href: "https://www.baidu.com",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "百度搜索",
                            }),
                            "并搜索 ",
                            (0, _.jsx)(be.Cy, { children: "test" }),
                            "，百度搜索会跳转到一个新的网址：",
                            (0, _.jsx)("a", {
                              href: "https://www.baidu.com/s?wd=test&ie=utf-8&tn=baiduhome_pg",
                              target: "_blank",
                              rel: "noreferrer",
                              children:
                                "https://www.baidu.com/s?wd=test&ie=utf-8&tn=baiduhome_pg",
                            }),
                          ],
                        }),
                        (0, _.jsxs)("li", {
                          children: [
                            "这个网址中包含我们刚才搜索的关键词 ",
                            (0, _.jsx)(be.Cy, { children: "test" }),
                            "，我们只需要将 ",
                            (0, _.jsx)(be.Cy, { children: "test" }),
                            " 替换成 ",
                            (0, _.jsx)(be.Cy, { children: "%s" }),
                            " ",
                            "填写进快捷链接即可，也就是",
                            " ",
                            (0, _.jsx)(be.Cy, {
                              children:
                                "https://www.baidu.com/s?wd=%s&ie=utf-8&tn=baiduhome_pg",
                            }),
                          ],
                        }),
                        (0, _.jsxs)("li", {
                          children: [
                            "最后，这个网址中其实有很多不需要的参数，例如",
                            " ",
                            (0, _.jsx)(be.Cy, {
                              children: "&ie=utf-8&tn=baiduhome_pg",
                            }),
                            "，也可以将它们去掉之后再填进划词翻译中。",
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      children: [
                        "配置好了之后，假设你在网页上划选了“划词翻译”，那么百度搜索的快捷链接就会指向",
                        " ",
                        (0, _.jsx)("a", {
                          href: "https://www.baidu.com/s?wd=%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "https://www.baidu.com/s?wd=划词翻译",
                        }),
                        "，点击之后就能看到用百度搜索“划词翻译”的搜索结果。",
                      ],
                    }),
                  ],
                }),
              }),
              (0, _.jsxs)(ve.F, {
                isOpen: l >= 0,
                cancelButtonText: "取消",
                confirmButtonText: "确定",
                intent: "danger",
                icon: "trash",
                onClose: (e) => {
                  var n;
                  (e &&
                    ((n = l),
                    t((e) => {
                      e.quickLinks.splice(n, 1);
                    })),
                    r(-1));
                },
                children: ["确定要删除“", n?.quickLinks[l]?.name, "”吗？"],
              }),
              (0, _.jsx)(k.l, {
                isOpen: s,
                title: (a ? "修改" : "新增") + "快捷链接",
                onClose: () => {
                  (i(!1), p(Ys));
                },
                onOpened: () => {
                  m.current?.focus();
                },
                children: (0, _.jsxs)("form", {
                  onSubmit: (e) => {
                    if ((e.preventDefault(), a)) {
                      if (
                        n?.quickLinks.find(
                          (e, n) => e.name === u.name && n !== d,
                        )
                      )
                        return (
                          m.current?.setCustomValidity(
                            "快捷链接的名称不能重复。",
                          ),
                          void m.current?.reportValidity()
                        );
                      (m.current?.setCustomValidity(""),
                        (s = u),
                        (l = d),
                        t((e) => {
                          e.quickLinks.splice(l, 1, s);
                        }));
                    } else {
                      if (n?.quickLinks.find((e) => e.name === u.name))
                        return (
                          m.current?.setCustomValidity(
                            "快捷链接的名称不能重复。",
                          ),
                          void m.current?.reportValidity()
                        );
                      (m.current?.setCustomValidity(""),
                        ((e) => {
                          t((n) => {
                            n.quickLinks.push(e);
                          });
                        })(u));
                    }
                    var s, l;
                    (i(!1), p(Ys));
                  },
                  children: [
                    (0, _.jsxs)("div", {
                      className: h.sar,
                      children: [
                        (0, _.jsxs)("p", {
                          children: [
                            "示例：",
                            Zs.map((e) =>
                              (0, _.jsx)(
                                "a",
                                {
                                  style: { marginRight: "5px" },
                                  onClick: () => p(e),
                                  children: e.name,
                                },
                                e.name,
                              ),
                            ),
                          ],
                        }),
                        (0, _.jsx)(C.g, {
                          label: "名称：",
                          children: (0, _.jsx)(T.M, {
                            required: !0,
                            inputRef: m,
                            value: u.name,
                            onChange: (e) => {
                              p(
                                (0, Rn.jM)((n) => {
                                  n.name = e.target.value;
                                }),
                              );
                            },
                          }),
                        }),
                        (0, _.jsx)(C.g, {
                          label: "链接：",
                          helperText: "可以在链接中使用“%s”表示划选的文本。",
                          children: (0, _.jsx)(T.M, {
                            required: !0,
                            type: "url",
                            value: u.link,
                            onChange: (e) => {
                              p(
                                (0, Rn.jM)((n) => {
                                  n.link = e.target.value;
                                }),
                              );
                            },
                          }),
                        }),
                        (0, _.jsxs)(C.g, {
                          label: "显示在：",
                          inline: !0,
                          children: [
                            (0, _.jsx)(fn.Sc, {
                              inline: !0,
                              label: "右键菜单",
                              checked: u.menu,
                              onChange: () => {
                                p(
                                  (0, Rn.jM)((e) => {
                                    e.menu = !e.menu;
                                  }),
                                );
                              },
                            }),
                            (0, _.jsx)(fn.Sc, {
                              inline: !0,
                              label: "翻译面板",
                              checked: u.panel,
                              onChange: () => {
                                p(
                                  (0, Rn.jM)((e) => {
                                    e.panel = !e.panel;
                                  }),
                                );
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: h.DBf,
                      children: (0, _.jsxs)("div", {
                        className: h.Nu2,
                        children: [
                          (0, _.jsx)(v.$, {
                            onClick: () => {
                              (i(!1), p(Ys));
                            },
                            children: "取消",
                          }),
                          (0, _.jsx)(v.$, {
                            type: "submit",
                            intent: "primary",
                            children: "确定",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, _.jsxs)(Cn._, {
                className: "quick-links-table",
                compact: !0,
                striped: !0,
                bordered: !0,
                style: { width: "100%" },
                children: [
                  (0, _.jsx)("thead", {
                    children: (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", { children: "名称" }),
                        (0, _.jsx)("th", { children: "在翻译面板中显示" }),
                        (0, _.jsx)("th", { children: "在右键菜单中显示" }),
                        (0, _.jsx)("th", { children: "操作" }),
                      ],
                    }),
                  }),
                  (0, _.jsxs)("tbody", {
                    children: [
                      !n?.quickLinks.length &&
                        (0, _.jsx)("tr", {
                          children: (0, _.jsx)("td", {
                            colSpan: 4,
                            children: (0, _.jsx)(Ae.I, {
                              title: "没有快捷链接",
                              description:
                                "你还没有添加任何快捷链接，点击下方按钮即可添加。",
                            }),
                          }),
                        }),
                      n?.quickLinks.map((e, t) =>
                        (0, _.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)("a", {
                                  href: e.link.replace(
                                    "%s",
                                    encodeURIComponent("划词翻译"),
                                  ),
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: e.name,
                                }),
                              }),
                              (0, _.jsx)("td", {
                                children: e.panel ? "是" : "否",
                              }),
                              (0, _.jsx)("td", {
                                children: e.menu ? "是" : "否",
                              }),
                              (0, _.jsxs)("td", {
                                children: [
                                  (0, _.jsx)(v.$, {
                                    minimal: !0,
                                    icon: "edit",
                                    onClick: () => {
                                      n && (c(!0), x(t), p(e), i(!0));
                                    },
                                    children: "修改",
                                  }),
                                  (0, _.jsx)(v.$, {
                                    minimal: !0,
                                    icon: "delete",
                                    onClick: () => r(t),
                                    children: "删除",
                                  }),
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                      (0, _.jsx)("tr", {
                        children: (0, _.jsx)("td", {
                          colSpan: 4,
                          style: { textAlign: "center" },
                          children: (0, _.jsx)(v.$, {
                            onClick: () => {
                              n && (c(!1), i(!0));
                            },
                            children: "新增快捷链接",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        const Ws = E()(F.g2, [
            "source",
            "destination",
            "secondDestination",
            "secondDestinationLatestSource",
            "showTextArea",
            "autoClipboard",
            "autoClipboardImage",
            "autoPlay",
            "autoCopy",
            "recentUseLangFrom",
            "recentUseLangTo",
            "panelSize",
            "panelCustomStyle",
            "textAreaAuto",
            "textAreaShortKey",
            "selectedAPIs",
            "selectedExternalLinks",
            "quickLinks",
            "autoPaste",
          ]),
          Js = (0, _.jsx)(kn.v, {
            htmlTitle: "此选项可以直接在翻译面板的快捷设置中调整。",
            minimal: !0,
            children: "快捷选项",
          });
        function Xs() {
          const [e, n] = (0, D.A)(Ws),
            t = e ? e.autoClipboard : Ws.autoClipboard,
            s = "string" == typeof t ? t : JSON.stringify(t),
            i = e ? e.autoClipboardImage : Ws.autoClipboardImage,
            l = "string" == typeof i ? i : JSON.stringify(i);
          return (0, _.jsxs)("div", {
            style: { margin: 15 },
            children: [
              (0, _.jsxs)(Je.P, {
                title: "关于翻译面板",
                style: { marginBottom: 15 },
                children: [
                  (0, _.jsx)("p", {
                    children:
                      "翻译面板被内嵌进了三个地方：网页划词后的翻译弹窗、独立翻译窗口、点击浏览器地址栏右侧的扩展按钮后的弹出页。",
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "这里的设置对这三个地方中的翻译面板均会生效。",
                      (0, _.jsx)("a", {
                        href: "https://hcfy.ai/docs/guides/panel",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "查看翻译面板介绍",
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, {
                    id: "启用翻译源",
                    children: "启用翻译源",
                  }),
                  (0, _.jsx)(C.g, {
                    label: "直接显示结果",
                    labelInfo: Js,
                    helperText: "这些翻译源的结果会直接在翻译面板上显示出来。",
                    children: (0, _.jsx)(Vn.f, {
                      selectedAPIs: e?.selectedAPIs || [],
                      onChange: (e) => {
                        n({ selectedAPIs: e });
                      },
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    style: { marginBottom: 15 },
                    children: [
                      "阿里翻译（专业版）与百度翻译（专业版）的选项已转移至",
                      (0, _.jsx)("a", {
                        href: (0, c.$P)("/services-options"),
                        children: "通用 - 第三方服务",
                      }),
                      "。",
                    ],
                  }),
                  (0, _.jsxs)(C.g, {
                    label: "显示顺序",
                    helperText:
                      "翻译源的显示顺序跟你勾选的顺序一致。如果你想完全重新排序，可以取消勾选所有翻译源后重新勾选。",
                    children: [
                      !e?.selectedAPIs.length && "-",
                      e?.selectedAPIs.map((e, n, t) => {
                        const s = yt.v.find((n) => n.id === e),
                          i = n === t.length - 1;
                        return s
                          ? (0, _.jsxs)(
                              "span",
                              {
                                style: i ? void 0 : { marginRight: 3 },
                                children: [s.name, !i && " >"],
                              },
                              s.id,
                            )
                          : null;
                      }),
                    ],
                  }),
                  (0, _.jsx)(C.g, {
                    label: "跳转链接",
                    helperText:
                      "你可以在翻译面板上添加这些翻译服务的跳转链接，点击之后会打开在线翻译结果地址。",
                    children: (0, _.jsx)("div", {
                      className: "external-translators",
                      children: (0, _.jsx)(qs, {
                        selected: e?.selectedExternalLinks || [],
                        onChange: (e) => {
                          n({ selectedExternalLinks: e });
                        },
                      }),
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "语种" }),
                  (0, _.jsx)(C.g, {
                    label: "源语种",
                    labelInfo: Js,
                    helperText: "当自动检测的语种不正确时，你可以指定源语种。",
                    children: (0, _.jsx)(qn.A, {
                      addAuto: !0,
                      lang: e ? e.source : Ws.source,
                      setLang: (e) => {
                        n({ source: e });
                      },
                    }),
                  }),
                  (0, _.jsxs)(C.g, {
                    label: "目标语种",
                    labelInfo: Js,
                    helperText:
                      "划词翻译会优先将文本翻译为首要目标语种，如果文本的语种与首要目标语种相同，则会翻译为次要目标语种。",
                    children: [
                      (0, _.jsxs)("div", {
                        children: [
                          "首要：",
                          (0, _.jsx)(qn.A, {
                            lang: e ? e.destination : Ws.destination,
                            setLang: (e) => {
                              n({ destination: e });
                            },
                          }),
                        ],
                      }),
                      "次要：固定为",
                      (0, _.jsx)(qn.A, {
                        disabled: e
                          ? e.secondDestinationLatestSource
                          : Ws.secondDestinationLatestSource,
                        lang: e ? e.secondDestination : Ws.secondDestination,
                        setLang: (e) => {
                          n({ secondDestination: e });
                        },
                      }),
                      (0, _.jsx)("span", {
                        style: { margin: "0 10px" },
                        children: "或者",
                      }),
                      (0, _.jsx)(fn.Sc, {
                        style: { margin: 0 },
                        inline: !0,
                        label: "动态的设置为上次翻译的文本的语种",
                        checked: e
                          ? e.secondDestinationLatestSource
                          : Ws.secondDestinationLatestSource,
                        onChange: (e) => {
                          n({
                            secondDestinationLatestSource: e.target.checked,
                          });
                        },
                      }),
                      " ",
                      (0, _.jsx)("a", {
                        href: "https://hcfy.ai/docs/guides/talk/#latest-source",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "查看说明",
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "自动化" }),
                  (0, _.jsxs)(C.g, {
                    helperText:
                      "点击扩展图标或使用全局快捷键打开独立窗口时，自动读取剪切板的文本或图片并翻译。",
                    children: [
                      (0, _.jsx)(se.z, {
                        inline: !0,
                        label: (0, _.jsxs)(_.Fragment, {
                          children: ["打开面板时自动翻译剪切板里的文本 ", Js],
                        }),
                        options: [
                          { label: "询问", value: "null" },
                          { label: "不翻译", value: "false" },
                          { label: "写入文本框但不翻译", value: "write-only" },
                          { label: "翻译", value: "true" },
                        ],
                        selectedValue: s,
                        onChange: (e) => {
                          n({
                            autoClipboard: (0, U.NZ)(e.currentTarget.value),
                          });
                        },
                      }),
                      (0, _.jsx)(se.z, {
                        inline: !0,
                        label: (0, _.jsx)(_.Fragment, {
                          children: "打开面板时自动翻译剪切板里的图片",
                        }),
                        options: [
                          { label: "询问", value: "null" },
                          { label: "不翻译", value: "false" },
                          { label: "写入文本框但不翻译", value: "write-only" },
                          { label: "翻译", value: "true" },
                        ],
                        selectedValue: l,
                        onChange: (e) => {
                          n({
                            autoClipboardImage: (0, U.NZ)(
                              e.currentTarget.value,
                            ),
                          });
                        },
                      }),
                    ],
                  }),
                  (0, _.jsx)(C.g, {
                    helperText:
                      "翻译后如果第一个翻译源可以朗读，则自动朗读被翻译的文本。为避免朗读时间过长，如果被翻译的文本超过了 30 个字符则不会朗读。",
                    children: (0, _.jsx)(fn.dO, {
                      labelElement: (0, _.jsxs)(_.Fragment, {
                        children: ["自动朗读 ", Js],
                      }),
                      checked: e ? e.autoPlay : Ws.autoPlay,
                      onChange: (e) => {
                        n({ autoPlay: e.target.checked });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    helperText:
                      "翻译后如果第一个翻译源有翻译结果，则自动将翻译结果复制进剪切板。",
                    children: (0, _.jsx)(fn.dO, {
                      labelElement: (0, _.jsxs)(_.Fragment, {
                        children: ["自动复制 ", Js],
                      }),
                      checked: e ? e.autoCopy : Ws.autoCopy,
                      onChange: (e) => {
                        n({ autoCopy: e.target.checked });
                      },
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { id: "快捷链接", children: "快捷链接" }),
                  (0, _.jsx)(Gs, { options: e, setOptions: n }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "文本框" }),
                  (0, _.jsx)(C.g, {
                    helperText:
                      "是否要在网页划词面板中显示文本框。在独立翻译窗口和扩展图标窗口中将始终显示文本框。",
                    children: (0, _.jsx)(fn.Sc, {
                      labelElement: (0, _.jsxs)(_.Fragment, {
                        children: ["显示文本框 ", Js],
                      }),
                      checked: e ? e.showTextArea : Ws.showTextArea,
                      onChange: (e) => {
                        n({ showTextArea: e.target.checked });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    children: (0, _.jsx)(fn.Sc, {
                      label: "粘贴文本后立刻翻译",
                      checked: e ? e.autoPaste : Ws.autoPaste,
                      onChange: (e) => {
                        n({ autoPaste: e.target.checked });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    helperText:
                      "勾选后，你在文本框内停止输入超过 1 秒后会自动翻译文本框中的文本。如果你经常在文本框内输入大段的文本，建议不要启用此选项，因为这会导致输入过程中触发多次翻译，造成字符数的浪费。",
                    children: (0, _.jsx)(fn.Sc, {
                      label: "自动翻译文本框",
                      checked: e ? e.textAreaAuto : Ws.textAreaAuto,
                      onChange: (e) => {
                        n({ textAreaAuto: e.target.checked });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    children: (0, _.jsx)(se.z, {
                      inline: !0,
                      label: "翻译快捷键",
                      selectedValue: e
                        ? e.textAreaShortKey
                        : Ws.textAreaShortKey,
                      onChange: (e) => {
                        const t = e.currentTarget.value;
                        n({ textAreaShortKey: t });
                      },
                      options: [
                        {
                          label: "Ctrl / ⌘ + Enter 翻译，Enter 换行",
                          value: F.o0.ctrlEnter,
                        },
                        {
                          label: "Enter 翻译，Ctrl / ⌘ + Enter 换行",
                          value: F.o0.enter,
                        },
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "源文本处理" }),
                  (0, _.jsx)(Hs, {}),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "自定义界面" }),
                  "此设置已转移到",
                  (0, _.jsx)("a", {
                    href: (0, c.$P)("/appearance"),
                    children: "通用 - 外观 - 翻译面板",
                  }),
                  "当中。",
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "网页划词面板" }),
                  "此设置已转移到",
                  (0, _.jsx)("a", {
                    href: (0, c.$P)("/cross"),
                    children: "功能设置 - 网页划词翻译",
                  }),
                  "当中。",
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "独立翻译窗口" }),
                  "此设置已转移到",
                  (0, _.jsx)("a", {
                    href: (0, c.$P)("/standalone"),
                    children: "功能设置 - 独立翻译窗口",
                  }),
                  "当中。",
                ],
              }),
            ],
          });
        }
        var Qs = t(48658),
          ei = t(51623),
          ni = t(21637),
          ti = t(75390),
          si = t(8883);
        const ii = new Qt(
          qt.historyRecords,
          ["text", "url", "favicon", "title"],
          (e) =>
            (0, S.cN)("/histories", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            }),
          "historiesSyncAt",
          () => (0, S.cN)("/histories", { method: "DELETE" }),
          (e) =>
            (0, S.cN)("/histories", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            }),
          (e) => (0, S.cN)("/histories?lastCheck=" + e),
          (e) => (0, S.cN)("/histories/logs?date=" + e, { method: "DELETE" }),
        );
        function li(e, n, t) {
          let s;
          if (t) {
            const e = t.toLocaleLowerCase();
            s = (n) =>
              n.title.toLocaleLowerCase().includes(e) ||
              n.url.toLocaleLowerCase().includes(e) ||
              n.text.toLocaleLowerCase().includes(e);
          }
          return ii.query(e, n, s);
        }
        const ri = E()(F.g2, ["historyEnabled", "historySyncEnabled"]);
        function ai(e) {
          const n = new Date(e);
          return (0, W.f)(n) ? (0, J.GP)(n, "b K:mm", { locale: si.g }) : "";
        }
        function oi(e) {
          if (!(0, W.f)(e)) return "";
          let n = "";
          return (
            (0, Qs.c)(e) ? (n = "今天 - ") : (0, ei.P)(e) && (n = "昨天 - "),
            n + (0, J.GP)(e, "yyyy 年 M 月 d 日 EEEE", { locale: si.g })
          );
        }
        function ci(e) {
          return new URL(e).hostname;
        }
        function di() {
          const [e, n] = (0, D.A)(ri),
            t = e || ri,
            { setShowVip: s } = (0, o.useContext)(Se),
            i = (0, o.useContext)(O),
            [l, r] = (0, o.useState)(!1),
            [a, c] = (0, o.useState)(!1),
            {
              tableData: d,
              queryNextPage: x,
              deleteSelected: p,
              clearData: g,
              setSearchText: j,
              cancelSelected: m,
              switchCheck: y,
            } = os(li, i, ii),
            f = (0, o.useMemo)(() => {
              const e = [];
              let n, t;
              return (
                d.rows.forEach((s) => {
                  !n || (0, ni.d)(n, s.date)
                    ? ((n = (0, ti.o)(s.date)),
                      (t = [s]),
                      e.push({ date: n, items: t }))
                    : t.push(s);
                }),
                e
              );
            }, [d.rows]);
          return (0, _.jsxs)("div", {
            id: "history-records",
            children: [
              (0, _.jsx)(ve.F, {
                cancelButtonText: "取消",
                confirmButtonText: "确定",
                intent: "danger",
                isOpen: l,
                icon: "trash",
                onClose: (e) => {
                  (e && p(), r(!1));
                },
                children: (0, _.jsx)("p", {
                  children: "确定要删除这些记录吗？",
                }),
              }),
              (0, _.jsx)(ve.F, {
                cancelButtonText: "取消",
                confirmButtonText: "确定",
                icon: "trash",
                intent: "danger",
                isOpen: a,
                onClose: (e) => {
                  (e && g(), c(!1));
                },
                children: (0, _.jsx)("p", {
                  children: "确定要清空历史记录吗？",
                }),
              }),
              (0, _.jsxs)("div", {
                className: "actions",
                children: [
                  (0, _.jsxs)("div", {
                    className: "actions-left",
                    children: [
                      (0, _.jsx)(T.M, {
                        className: "search-input",
                        placeholder: "搜索历史记录",
                        rightElement: d.searchText
                          ? (0, _.jsx)(v.$, {
                              icon: "cross",
                              minimal: !0,
                              onClick: () => {
                                j("");
                              },
                            })
                          : void 0,
                        value: d.searchText,
                        onChange: (e) => {
                          const n = e.target.value;
                          j(n);
                        },
                      }),
                      d.selectedRows.length
                        ? (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(v.$, {
                                text: `删除选中的记录（${d.selectedRows.length}）`,
                                intent: "primary",
                                style: { marginLeft: "10px" },
                                onClick: () => {
                                  r(!0);
                                },
                              }),
                              (0, _.jsx)(v.$, {
                                text: "取消选择",
                                style: { margin: "0 10px" },
                                onClick: m,
                              }),
                              (0, _.jsx)(v.$, {
                                intent: "danger",
                                text: "清空历史记录",
                                onClick: () => {
                                  c(!0);
                                },
                              }),
                            ],
                          })
                        : void 0,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: "actions-right",
                    children: [
                      !(0, Te.Rc)(i) &&
                        (0, _.jsx)("a", {
                          style: { marginRight: 15 },
                          onClick: () => s(!0),
                          children: "将历史记录同步到云端",
                        }),
                      (0, _.jsx)(fn.Sc, {
                        label: "启用历史记录",
                        inline: !0,
                        checked: t.historyEnabled,
                        onChange: (e) => {
                          n({ historyEnabled: e.target.checked });
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: "actions-bg",
                style: { height: "60px" },
              }),
              (0, _.jsxs)("div", {
                style: { padding: "0 15px 15px 15px" },
                children: [
                  f.map(({ date: e, items: n }) =>
                    (0, _.jsxs)(
                      u.Z,
                      {
                        children: [
                          (0, _.jsx)(be.H3, { children: oi(e) }),
                          n.map((e) => {
                            return (0, _.jsxs)(
                              "p",
                              {
                                className: "history-item",
                                children: [
                                  (0, _.jsx)("span", {
                                    className: "date",
                                    children: (0, _.jsx)(fn.Sc, {
                                      checked: d.selectedRows.includes(e.id),
                                      labelElement: (0, _.jsx)("span", {
                                        className: h.E4k,
                                        children: ai(e.date),
                                      }),
                                      onChange: () => {
                                        y(e.id);
                                      },
                                    }),
                                  }),
                                  (0, _.jsx)("span", {
                                    className: "text",
                                    children: e.text,
                                  }),
                                  ((n = e.url),
                                  n.startsWith("chrome-extension://") ||
                                  n.startsWith("moz-extension://")
                                    ? (0, _.jsx)("span", {
                                        className: `${h.KJG} ${h.E4k} hostname`,
                                        onClick: () => {
                                          j("划词翻译");
                                        },
                                        children: e.title,
                                      })
                                    : (0, _.jsxs)(_.Fragment, {
                                        children: [
                                          (0, _.jsx)("img", {
                                            src: e.favicon,
                                            width: "12px",
                                            height: "12px",
                                            alt: "",
                                          }),
                                          (0, _.jsx)("a", {
                                            className: h.HL_,
                                            href: e.url,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            title: e.title || e.url,
                                            children: e.title || e.url,
                                          }),
                                          (0, _.jsx)("span", {
                                            className: `${h.KJG} ${h.E4k} hostname`,
                                            onClick: () => {
                                              const n = ci(e.url);
                                              j(n);
                                            },
                                            children: ci(e.url),
                                          }),
                                        ],
                                      })),
                                ],
                              },
                              e.id,
                            );
                            var n;
                          }),
                        ],
                      },
                      e.getTime(),
                    ),
                  ),
                  !d.loading &&
                    !d.end &&
                    (0, _.jsx)(v.$, { onClick: x, text: "加载更多" }),
                  d.loading && (0, _.jsx)(Ht.y, {}),
                  !d.loading &&
                    !d.rows.length &&
                    (0, _.jsx)(Ae.I, {
                      icon: "blank",
                      title: d.searchText ? "没有搜索结果" : "无历史记录",
                      description: t.historyEnabled
                        ? ""
                        : "若要记录翻译历史，请勾选上方的“启用历史记录”。",
                    }),
                ],
              }),
            ],
          });
        }
        function hi(e) {
          return (0, _.jsx)(B, {
            children: (0, _.jsx)(Ee, { children: e.children }),
          });
        }
        const xi = E()(F.g2, ["pageTrsJumpTwo"]);
        function ui() {
          const [e, n] = (0, D.A)(xi);
          return (0, _.jsx)(fn.Sc, {
            inline: !0,
            style: { marginBottom: 0 },
            label: "跳过【双语】",
            checked: e ? e.pageTrsJumpTwo : xi.pageTrsJumpTwo,
            onChange: (e) => {
              n({ pageTrsJumpTwo: e.target.checked });
            },
          });
        }
        function pi() {
          chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
        }
        const gi = {
          _execute_browser_action:
            "等同于点击位于浏览器地址栏右侧的划词翻译扩展图标。",
          switchWeb: "切换【在所有网站中禁用网页划词】选项。",
          play: "等同于点击第一个翻译服务的播放按钮。",
          pageSwitchMode: (0, _.jsxs)(_.Fragment, {
            children: ["可选项：", (0, _.jsx)(ui, {})],
          }),
          panel: (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                style: We ? { textDecoration: "line-through" } : void 0,
                children:
                  "这是一个全局快捷键，你可以在浏览器以外的地方使用此快捷键来打开独立窗口翻译剪切板内的文本或图片。在修改此快捷键时，请确保作用域为“全局”。",
              }),
              We &&
                (0, _.jsx)("b", {
                  children:
                    "由于 Firefox 不支持全局快捷键，所以无法在浏览器以外的地方使用此快捷键。",
                }),
            ],
          }),
        };
        function ji(e) {
          const n = e.split(e.includes("+") ? "+" : "");
          return (0, _.jsx)(_.Fragment, {
            children: n.map((e, n) => {
              const t = 0 === n;
              return (0, _.jsx)(
                "kbd",
                { style: t ? { marginLeft: 0 } : void 0, children: e },
                e,
              );
            }),
          });
        }
        function mi() {
          const e = (0, H.A)(() => chrome.commands.getAll(), []);
          return (0, _.jsx)("div", {
            style: { margin: 15 },
            children: (0, _.jsxs)(u.Z, {
              children: [
                (0, _.jsx)(be.H4, { children: "快捷键" }),
                (0, _.jsxs)("p", {
                  children: [
                    Ye &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          "请前往",
                          (0, _.jsx)("a", {
                            onClick: pi,
                            children: "键盘快捷键页面",
                          }),
                          "修改这些快捷键。",
                          (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/faqs/edit-shortcut-key",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "修改后没有生效？",
                          }),
                        ],
                      }),
                    We &&
                      "请打开附加组件管理器（about:addons），点击“管理扩展程序”右侧的设置按钮，选择“管理扩展快捷键”来修改这些快捷键。",
                  ],
                }),
                (0, _.jsxs)(Cn._, {
                  compact: !0,
                  striped: !0,
                  bordered: !0,
                  children: [
                    (0, _.jsx)("thead", {
                      children: (0, _.jsxs)("tr", {
                        children: [
                          (0, _.jsx)("th", {
                            style: { width: 160 },
                            children: "名称",
                          }),
                          (0, _.jsx)("th", {
                            style: { width: 170 },
                            children: "快捷键",
                          }),
                          (0, _.jsx)("th", { children: "简介" }),
                        ],
                      }),
                    }),
                    (0, _.jsx)("tbody", {
                      children: e.value?.map((e) => {
                        const n = e.name;
                        return n
                          ? (0, _.jsxs)(
                              "tr",
                              {
                                children: [
                                  (0, _.jsx)("td", {
                                    children: e.description || "激活该扩展程序",
                                  }),
                                  (0, _.jsx)("td", {
                                    children: e.shortcut
                                      ? ji(e.shortcut)
                                      : "未设置",
                                  }),
                                  (0, _.jsx)("td", { children: gi[n] }),
                                ],
                              },
                              n,
                            )
                          : null;
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var yi = t(61707),
          fi = t(59468),
          vi = t(60244);
        const bi = [
            {
              label: (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(Q.I, { icon: "cut", style: { marginRight: 4 } }),
                  "截图翻译按钮",
                ],
              }),
              value: "cut",
            },
            {
              label: (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(Q.I, {
                    icon: "translate",
                    style: { marginRight: 4 },
                  }),
                  "网页全文翻译按钮",
                ],
              }),
              value: "translate",
            },
            {
              label: (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(Q.I, { icon: "video", style: { marginRight: 4 } }),
                  "音视频翻译按钮",
                ],
              }),
              value: "video",
            },
            {
              label: (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(Q.I, { icon: "media", style: { marginRight: 4 } }),
                  "图片翻译按钮",
                ],
              }),
              value: "media",
            },
            {
              label: (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(Q.I, {
                    icon: (0, _.jsx)(vi.x, { iconSize: 14 }),
                    style: { marginRight: 4 },
                  }),
                  "麦克风翻译按钮",
                ],
              }),
              value: "microphone",
            },
            {
              label: (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(Q.I, {
                    icon: "folder-open",
                    style: { marginRight: 4 },
                  }),
                  "收藏夹按钮",
                ],
              }),
              value: "folder-open",
            },
            {
              label: (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(Q.I, {
                    icon: "history",
                    style: { marginRight: 4 },
                  }),
                  "历史记录按钮",
                ],
              }),
              value: "history",
            },
          ],
          ki = E()(F.g2, ["panelButtons"]);
        function Ci() {
          const [e, n] = (0, D.A)(ki);
          return (0, _.jsx)(C.g, {
            label: "面板上的按钮",
            children: (0, _.jsx)(Us.x, {
              items: bi,
              selected: e ? e.panelButtons : ki.panelButtons,
              onChange: (e) => {
                n({ panelButtons: e });
              },
            }),
          });
        }
        var Ti = t(54712);
        const Si = E()(F.g2, ["contextMenus"]);
        function wi() {
          const [e, n] = (0, D.A)(Si);
          return (0, _.jsxs)(u.Z, {
            children: [
              (0, _.jsx)(be.H4, { children: "右键菜单" }),
              (0, _.jsx)(C.g, {
                helperText: (0, _.jsxs)(_.Fragment, {
                  children: [
                    "你可以移除你不想要的右键菜单。右键菜单里的快捷链接请在",
                    (0, _.jsx)("a", {
                      href: (0, c.$P)("/panel"),
                      children: "通用设置 - 翻译面板",
                    }),
                    "内移除。",
                  ],
                }),
                children: (0, _.jsx)(Us.x, {
                  items: Ti.T,
                  selected: e ? e.contextMenus : Si.contextMenus,
                  onChange: (e) => {
                    n({ contextMenus: e });
                  },
                }),
              }),
            ],
          });
        }
        var Pi = t(62337),
          Ei = t(69675);
        const _i = {
          STYLE_NONE: Pi.P9,
          STYLE_DOTTED_CLASSIC: Pi.O,
          STYLE_DOTTED: Pi.pb,
          STYLE_WAVY: Pi.UU,
          STYLE_LINE: Pi.Zi,
          STYLE_BACKGROUND: Pi.dd,
          STYLE_QUOTE: Pi.PD,
        };
        let Ai;
        function Mi() {
          if (Ai) return;
          ((Ai = document.createElement("style")),
            (Ai.dataset.title =
              "这是由划词翻译创建的节点，用于控制全文翻译的译文样式。"),
            document.head.appendChild(Ai));
          const e = E()(F.g2, [
            "pageTrsResultStyleId",
            "pageTrsResultStyleMainColor",
            "pageTrsResultStyleTextColor",
            "pageTrsResultStyleTextSize",
            "pageTrsResultStyleTextWeight",
            "pageTrsResultStyleCustom",
          ]);
          (0, Ei.A)(e, (n) => {
            (n.pageTrsResultStyleId &&
              (e.pageTrsResultStyleId = n.pageTrsResultStyleId),
              void 0 !== n.pageTrsResultStyleCustom &&
                (e.pageTrsResultStyleCustom = n.pageTrsResultStyleCustom),
              void 0 !== n.pageTrsResultStyleMainColor &&
                (e.pageTrsResultStyleMainColor = n.pageTrsResultStyleMainColor),
              void 0 !== n.pageTrsResultStyleTextColor &&
                (e.pageTrsResultStyleTextColor = n.pageTrsResultStyleTextColor),
              void 0 !== n.pageTrsResultStyleTextSize &&
                (e.pageTrsResultStyleTextSize = n.pageTrsResultStyleTextSize),
              void 0 !== n.pageTrsResultStyleTextWeight &&
                (e.pageTrsResultStyleTextWeight =
                  n.pageTrsResultStyleTextWeight),
              (function () {
                if (!Ai) return;
                let n = "hcfy-result{";
                (e.pageTrsResultStyleMainColor &&
                  (n += `--hcfy-result-main-color:${e.pageTrsResultStyleMainColor};`),
                  e.pageTrsResultStyleTextColor &&
                    (n += `--hcfy-result-text-color:${e.pageTrsResultStyleTextColor};`),
                  e.pageTrsResultStyleTextSize &&
                    (n += `--hcfy-result-text-size:${e.pageTrsResultStyleTextSize}em;`),
                  e.pageTrsResultStyleTextWeight &&
                    (n += `--hcfy-result-text-weight:${e.pageTrsResultStyleTextWeight};`),
                  (n += "}"),
                  "STYLE_CUSTOM" === e.pageTrsResultStyleId
                    ? (n += e.pageTrsResultStyleCustom)
                    : (n += _i[e.pageTrsResultStyleId] || ""),
                  (Ai.textContent = n));
              })());
          });
        }
        function Li(e) {
          const { value: n, defaultValue: t = "#000000", onChange: s } = e,
            i = (0, o.useRef)(null);
          return (0, _.jsxs)("span", {
            style: { display: "inline-flex", alignItems: "center" },
            children: [
              (0, _.jsx)("input", {
                ref: i,
                style: null == n ? { display: "none" } : void 0,
                type: "color",
                value: n || t,
                onChange: (e) => {
                  s(e.target.value);
                },
              }),
              null != n &&
                (0, _.jsx)(v.$, {
                  style: { marginLeft: 10 },
                  text: "重置为默认颜色",
                  onClick: () => {
                    s(null);
                  },
                }),
              !n &&
                (0, _.jsx)(v.$, {
                  text: "点击修改",
                  onClick: () => {
                    (s(t),
                      setTimeout(() => {
                        i.current.click();
                      }));
                  },
                }),
            ],
          });
        }
        const Ii = E()(F.g2, [
          "panelSize",
          "panelCustomStyle",
          "pageTrsResultStyleId",
          "pageTrsResultStyleMainColor",
          "pageTrsResultStyleTextColor",
          "pageTrsResultStyleTextSize",
          "pageTrsResultStyleTextWeight",
          "pageTrsResultStyleCustom",
        ]);
        function Ni() {
          const { darkMode: e, setDarkMode: n } = (0, j.A)(),
            [t, s] = (0, D.A)(Ii);
          return (
            (0, o.useEffect)(Mi, []),
            (0, _.jsxs)("div", {
              style: { margin: 15 },
              children: [
                (0, _.jsxs)(u.Z, {
                  children: [
                    (0, _.jsx)(be.H4, { children: "深色模式" }),
                    (0, _.jsx)(C.g, {
                      children: (0, _.jsxs)(se.z, {
                        inline: !0,
                        onChange: (e) => {
                          n(e.target.value);
                        },
                        selectedValue: e,
                        children: [
                          (0, _.jsx)(fn.sx, { label: "开", value: "open" }),
                          (0, _.jsx)(fn.sx, { label: "关", value: "close" }),
                          (0, _.jsx)(fn.sx, {
                            label: "跟随系统",
                            value: "system",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(wi, {}),
                (0, _.jsxs)(u.Z, {
                  children: [
                    (0, _.jsx)(be.H4, { children: "翻译面板" }),
                    (0, _.jsx)(C.g, {
                      label: "字体和按钮大小",
                      labelInfo: Js,
                      children: (0, _.jsx)(fi.y, {
                        value: t?.panelSize || Ii.panelSize,
                        onChange: (e) => {
                          s({ panelSize: e });
                        },
                      }),
                    }),
                    (0, _.jsx)(Ci, {}),
                    (0, _.jsx)(C.g, {
                      label: "自定义面板样式",
                      helperText: (0, _.jsxs)(_.Fragment, {
                        children: [
                          "使用",
                          " ",
                          (0, _.jsx)("a", {
                            href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "CSS",
                          }),
                          " ",
                          "自定义面板样式。",
                          (0, _.jsx)("a", {
                            href: "https://github.com/hcfyapp/crx-selection-translate/discussions/950",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "分享你的或查看其他人的自定义样式",
                          }),
                        ],
                      }),
                      children: (0, _.jsx)(at.f, {
                        autoResize: !0,
                        size: "large",
                        fill: !0,
                        onChange: (e) => {
                          s({ panelCustomStyle: e.target.value });
                        },
                        value:
                          (t ? t.panelCustomStyle : Ii.panelCustomStyle) ||
                          "#translate-panel {\n  /* 浅色模式下的面板样式 */\n}\n.bp6-dark #translate-panel {\n  /* 深色模式下的面板样式 */\n}",
                        placeholder:
                          "#translate-panel {\n  /* 浅色模式下的面板样式 */\n}\n.bp6-dark #translate-panel {\n  /* 深色模式下的面板样式 */\n}",
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)(u.Z, {
                  children: [
                    (0, _.jsx)(be.H4, { children: "网页全文翻译" }),
                    (0, _.jsx)(C.g, {
                      label: "译文样式",
                      inline: !0,
                      children: (0, _.jsx)(yi.g, {
                        options: [
                          { label: "自定义…", value: "STYLE_CUSTOM" },
                          { label: "无", value: "STYLE_NONE" },
                          {
                            label: "虚线边框（经典）",
                            value: "STYLE_DOTTED_CLASSIC",
                          },
                          { label: "虚线边框", value: "STYLE_DOTTED" },
                          { label: "直线", value: "STYLE_LINE" },
                          { label: "波浪线", value: "STYLE_WAVY" },
                          { label: "深色背景", value: "STYLE_BACKGROUND" },
                          { label: "引用", value: "STYLE_QUOTE" },
                        ],
                        value:
                          t?.pageTrsResultStyleId || Ii.pageTrsResultStyleId,
                        onChange: (e) => {
                          s({ pageTrsResultStyleId: e.target.value });
                        },
                      }),
                    }),
                    "STYLE_CUSTOM" !== t?.pageTrsResultStyleId &&
                      "STYLE_DOTTED_CLASSIC" !== t?.pageTrsResultStyleId &&
                      "STYLE_NONE" !== t?.pageTrsResultStyleId &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)(C.g, {
                            label: "主要颜色",
                            inline: !0,
                            children: (0, _.jsx)(Li, {
                              value:
                                t?.pageTrsResultStyleMainColor ||
                                Ii.pageTrsResultStyleMainColor,
                              onChange: (e) => {
                                s({ pageTrsResultStyleMainColor: e });
                              },
                            }),
                          }),
                          (0, _.jsx)(C.g, {
                            label: "文字颜色",
                            inline: !0,
                            children: (0, _.jsx)(Li, {
                              value:
                                t?.pageTrsResultStyleTextColor ||
                                Ii.pageTrsResultStyleTextColor,
                              onChange: (e) => {
                                s({ pageTrsResultStyleTextColor: e });
                              },
                            }),
                          }),
                          (0, _.jsx)(C.g, {
                            label: "文字大小",
                            inline: !0,
                            helperText: (0, _.jsxs)(_.Fragment, {
                              children: [
                                "这是相对大小，即 ",
                                (0, _.jsx)(be.Cy, { children: "0.5" }),
                                " 表示为原本的一半大小、",
                                (0, _.jsx)(be.Cy, { children: "1" }),
                                " 表示跟原本的一样大、",
                                (0, _.jsx)(be.Cy, { children: "2" }),
                                " ",
                                "表示为原本的两倍大。",
                              ],
                            }),
                            children: (0, _.jsx)(bn.O, {
                              style: { width: 150 },
                              min: 0,
                              stepSize: 0.1,
                              majorStepSize: null,
                              minorStepSize: null,
                              placeholder: "不填则为默认大小",
                              rightElement:
                                (t?.pageTrsResultStyleTextSize ??
                                Ii.pageTrsResultStyleTextSize)
                                  ? (0, _.jsx)(v.$, {
                                      icon: "cross-circle",
                                      variant: "minimal",
                                      onClick: () => {
                                        s({ pageTrsResultStyleTextSize: null });
                                      },
                                    })
                                  : void 0,
                              value:
                                t?.pageTrsResultStyleTextSize ??
                                Ii.pageTrsResultStyleTextSize ??
                                "",
                              onValueChange: (e, n) => {
                                s({ pageTrsResultStyleTextSize: n || null });
                              },
                            }),
                          }),
                          (0, _.jsx)(C.g, {
                            label: "文字粗细",
                            inline: !0,
                            children: (0, _.jsx)(bn.O, {
                              style: { width: 150 },
                              min: 100,
                              max: 1e3,
                              stepSize: 100,
                              majorStepSize: null,
                              minorStepSize: null,
                              placeholder: "不填则为默认粗细",
                              rightElement:
                                (t?.pageTrsResultStyleTextWeight ??
                                Ii.pageTrsResultStyleTextWeight)
                                  ? (0, _.jsx)(v.$, {
                                      icon: "cross-circle",
                                      variant: "minimal",
                                      onClick: () => {
                                        s({
                                          pageTrsResultStyleTextWeight: null,
                                        });
                                      },
                                    })
                                  : void 0,
                              value:
                                t?.pageTrsResultStyleTextWeight ??
                                Ii.pageTrsResultStyleTextWeight ??
                                "",
                              onValueChange: (e, n) => {
                                s({ pageTrsResultStyleTextWeight: n || null });
                              },
                            }),
                          }),
                        ],
                      }),
                    "STYLE_CUSTOM" === t?.pageTrsResultStyleId &&
                      (0, _.jsx)(C.g, {
                        label: "自定义译文样式",
                        helperText: (0, _.jsxs)(_.Fragment, {
                          children: [
                            "使用",
                            " ",
                            (0, _.jsx)("a", {
                              href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "CSS",
                            }),
                            " ",
                            "自定义译文样式。",
                            (0, _.jsx)("a", {
                              href: "https://github.com/hcfyapp/crx-selection-translate/discussions/1686",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "分享你的或查看其他人的自定义样式",
                            }),
                          ],
                        }),
                        children: (0, _.jsx)(at.f, {
                          autoResize: !0,
                          size: "large",
                          fill: !0,
                          placeholder:
                            ".__hcfy-result-comparison__ {\n  /* 译文外框样式 */\n}\n.__hcfy-result-comparison__ hcfy-result-content {\n  /* 译文内容样式 */\n}\n.__hcfy-result-editing__ {\n  /* 译文处于编辑状态时的样式 */\n}\n.__hcfy-result-comparison-block__ {\n  /* 译文跟原文是换行显示时的样式 */\n}\n.__hcfy-result-comparison-inline__ {\n  /* 译文跟原文是同一行显示时的样式 */\n}",
                          onChange: (e) => {
                            s({ pageTrsResultStyleCustom: e.target.value });
                          },
                          value:
                            (t
                              ? t.pageTrsResultStyleCustom
                              : Ii.pageTrsResultStyleCustom) ||
                            ".__hcfy-result-comparison__ {\n  /* 译文外框样式 */\n}\n.__hcfy-result-comparison__ hcfy-result-content {\n  /* 译文内容样式 */\n}\n.__hcfy-result-editing__ {\n  /* 译文处于编辑状态时的样式 */\n}\n.__hcfy-result-comparison-block__ {\n  /* 译文跟原文是换行显示时的样式 */\n}\n.__hcfy-result-comparison-inline__ {\n  /* 译文跟原文是同一行显示时的样式 */\n}",
                        }),
                      }),
                    (0, _.jsx)(C.g, {
                      label: "-",
                      labelInfo: "原文跟译文换行显示：",
                      children: (0, _.jsxs)("div", {
                        style: { fontSize: "2em" },
                        children: [
                          "How are you? I'm fine, thanks. And you? I'm fine, too.",
                          (0, _.jsxs)("hcfy-result", {
                            class:
                              "__hcfy-result-comparison__ __hcfy-result-comparison-block__",
                            style: { display: "block" },
                            children: [
                              (0, _.jsx)("hcfy-result-content", {
                                children:
                                  "你好吗？我很好，谢谢。你呢？我也很好。",
                              }),
                              (0, _.jsx)("hcfy-result-actions", {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(C.g, {
                      label: "-",
                      labelInfo: "原文跟译文在同一行：",
                      children: (0, _.jsxs)("div", {
                        style: { fontSize: "2em" },
                        children: [
                          "I love you babe.",
                          (0, _.jsxs)("hcfy-result", {
                            class:
                              "__hcfy-result-comparison__ __hcfy-result-comparison-inline__",
                            style: { display: "inline-block" },
                            children: [
                              (0, _.jsx)("hcfy-result-content", {
                                children: "我爱你，宝贝。",
                              }),
                              (0, _.jsx)("hcfy-result-actions", {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(C.g, {
                      label: "-",
                      labelInfo: "译文处于编辑状态：",
                      children: (0, _.jsxs)("div", {
                        style: { fontSize: "2em" },
                        children: [
                          "How are you? I'm fine, thanks. And you? I'm fine, too.",
                          (0, _.jsxs)("hcfy-result", {
                            class:
                              "__hcfy-result-comparison__ __hcfy-result-comparison-block__ __hcfy-result-editing__",
                            style: { display: "block" },
                            children: [
                              (0, _.jsx)("hcfy-result-content", {
                                contentEditable: "true",
                                children:
                                  "你好吗？我很好，谢谢。你呢？我也很好。",
                              }),
                              (0, _.jsx)("hcfy-result-actions", {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var Ri = t(41857),
          Fi = t(16321),
          Di = t(19891),
          Oi = t.n(Di);
        let $i;
        const Ki = () =>
            $i ||
            ($i = (0, Fi.L)(
              () =>
                new Promise((e, n) => {
                  const t = speechSynthesis.getVoices();
                  t.length
                    ? e(t)
                    : n(new Error("无法获取系统支持的语音列表，请稍后重试。"));
                }),
              { delay: 500, count: 10 },
            ).then((e) => {
              const n = {},
                t = {};
              e.forEach((e) => {
                const s = e.lang;
                n[s] ? n[s].push(e) : (n[s] = [e]);
                const i = s.slice(0, s.indexOf("-"));
                t[i] ? t[i].indexOf(s) < 0 && t[i].push(s) : (t[i] = [s]);
              });
              const s = [],
                i = {};
              return (
                ns()(n, (e, t) => {
                  1 === e.length && (s.push(t), (i[t] = e[0]), delete n[t]);
                }),
                ns()(t, (e, n) => {
                  1 === e.length && delete t[n];
                }),
                {
                  singleVoiceMap: i,
                  singleList: s,
                  voicesGroup: n,
                  multipleLang: t,
                }
              );
            })),
          Bi = Oi()({
            "中文(简体)": "zh-CN",
            "中文(粤语)": "zh-HK",
            "中文(繁体)": "zh-TW",
            英语: "en",
            "英语(英国)": "en-GB",
            "英语(美国)": "en-US",
            "英语(加拿大)": "en-CA",
            "英语(澳大利亚)": "en-AU",
            "英语(印度)": "en-IN",
            "英语(爱尔兰)": "en-IE",
            "英语(南非)": "en-ZA",
            德语: "de-DE",
            西班牙语: "es-ES",
            "西班牙语(墨西哥)": "es-MX",
            "西班牙语(美国)": "es-US",
            "西班牙语(阿根廷)": "es-AR",
            法语: "fr-FR",
            "法语(加拿大)": "fr-CA",
            印地语: "hi-IN",
            印尼语: "id-ID",
            意大利语: "it-IT",
            日语: "ja-JP",
            韩语: "ko-KR",
            荷兰语: "nl-NL",
            "荷兰语(比利时)": "nl-BE",
            波兰语: "pl-PL",
            葡萄牙语: "pt-PT",
            "葡萄牙语(巴西)": "pt-BR",
            俄语: "ru-RU",
            土耳其语: "tr-TR",
            瑞典语: "sv-SE",
            希伯来语: "he-IL",
            罗马尼亚语: "ro-RO",
            泰语: "th-TH",
            斯洛伐克语: "sk-SK",
            阿拉伯语: "ar-SA",
            匈牙利语: "hu-HU",
            希腊语: "el-GR",
            挪威语: "nb-NO",
            丹麦语: "da-DK",
            芬兰语: "fi-FI",
            捷克语: "cs-CZ",
          }),
          zi = Oi()({
            "中文(简体)": "zh",
            英语: "en",
            法语: "fr",
            西班牙语: "es",
            荷兰语: "nl",
            葡萄牙语: "pt",
          });
        zi.zh = "中文";
        const Hi = E()(F.g2, [
          "audioVolume",
          "audioRate",
          "systemTTS",
          "systemTTSVoice",
          "systemTTSAccent",
        ]);
        function Ui() {
          const [e, n] = (0, D.A)(Hi),
            t = (0, H.A)(Ki);
          return e
            ? (0, _.jsxs)("div", {
                style: { margin: 15 },
                children: [
                  (0, _.jsxs)(u.Z, {
                    children: [
                      (0, _.jsxs)(be.H4, {
                        id: "系统语音",
                        children: [
                          (0, _.jsx)("span", {
                            style: { marginRight: 10 },
                            children: "系统语音",
                          }),
                          (0, _.jsxs)(Fe, {
                            children: [
                              (0, _.jsx)("p", {
                                children:
                                  "系统语音是由你的浏览器和操作系统提供的语音，划词翻译支持使用系统语音来朗读文本。",
                              }),
                              (0, _.jsxs)("p", {
                                children: [
                                  "系统语音有两种类型：本地语音和网络语音。本地语音在电脑没有联网时也能使用；网络语音需要电脑联网才能使用，网络不好的情况下可能无法发声。",
                                  Ge &&
                                    (0, _.jsx)("b", {
                                      children:
                                        "由谷歌提供的网络语音需要能连接外网才可使用。",
                                    }),
                                ],
                              }),
                              (0, _.jsx)("div", {
                                children:
                                  "建议在 Microsoft Edge 浏览器或 macOS 操作系统上使用系统语音设置，因为它们提供的语音最丰富多样。",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsx)(C.g, {
                        label: "何时使用系统语音",
                        helperText:
                          "部分操作系统或浏览器在使用系统语音后可能会出现浏览器崩溃、视频音画不同步或杂音问题，如果你遇到了这些问题，请选择“不使用系统语音”。",
                        children: (0, _.jsxs)(se.z, {
                          selectedValue: e.systemTTS,
                          onChange: (e) => {
                            n({ systemTTS: e.currentTarget.value });
                          },
                          children: [
                            (0, _.jsx)(fn.sx, {
                              label:
                                "先使用翻译源自己的语音朗读，如果翻译源无法朗读，再使用系统语音",
                              value: "aid",
                            }),
                            (0, _.jsx)(fn.sx, {
                              label: "始终使用系统语音朗读",
                              value: "prior",
                            }),
                            (0, _.jsx)(fn.sx, {
                              label: "不使用系统语音",
                              value: "none",
                            }),
                          ],
                        }),
                      }),
                      t.loading
                        ? (0, _.jsx)("div", {
                            children: "正在读取系统语音列表，请稍候……",
                          })
                        : t.error
                          ? (0, _.jsx)("div", { children: t.error.message })
                          : t.value &&
                            (0, _.jsxs)(C.g, {
                              children: [
                                (0, _.jsx)(C.g, {
                                  className: "inline-form-group-label",
                                  label: "选择口音",
                                  helperText: Object.keys(t.value.multipleLang)
                                    .length
                                    ? "你的浏览器对以上语言支持多种口音，你可以选择一个你喜欢的口音来朗读这些语言。"
                                    : "你的浏览器没有提供多个口音，因此无法选择。",
                                  children: Object.keys(
                                    t.value.multipleLang,
                                  ).map((s) => {
                                    const i = t.value?.multipleLang[s];
                                    return (0, _.jsxs)(
                                      "div",
                                      {
                                        children: [
                                          zi[s] || s,
                                          "：",
                                          (0, _.jsxs)(yi.g, {
                                            value: e.systemTTSAccent[s],
                                            onChange: (e) => {
                                              n((n) => {
                                                const t = e.target.value;
                                                t
                                                  ? (n.systemTTSAccent[s] = t)
                                                  : delete n.systemTTSAccent[s];
                                              });
                                            },
                                            children: [
                                              (0, _.jsx)("option", {
                                                value: "",
                                                children: "自动",
                                              }),
                                              i.map((e) =>
                                                (0, _.jsx)(
                                                  "option",
                                                  {
                                                    value: e,
                                                    children: Bi[e] || e,
                                                  },
                                                  e,
                                                ),
                                              ),
                                            ],
                                          }),
                                        ],
                                      },
                                      s,
                                    );
                                  }),
                                }),
                                (0, _.jsx)(C.g, {
                                  className: "inline-form-group-label",
                                  label: "选择系统语音",
                                  helperText: Object.keys(t.value.voicesGroup)
                                    .length
                                    ? "你的浏览器对以上语言支持多个系统语音，你可以选择一个你喜欢的系统语音用来朗读这些语言。"
                                    : "你的浏览器没有提供多个系统语音，因此无法选择。",
                                  children: Object.keys(
                                    t.value.voicesGroup,
                                  ).map((s) => {
                                    const i = t.value.voicesGroup[s];
                                    return (0, _.jsxs)(
                                      "div",
                                      {
                                        children: [
                                          Bi[s] || s,
                                          "：",
                                          (0, _.jsxs)(yi.g, {
                                            value: e.systemTTSVoice[s],
                                            onChange: (e) => {
                                              n((n) => {
                                                const t = e.target.value;
                                                t
                                                  ? (n.systemTTSVoice[s] = t)
                                                  : delete n.systemTTSVoice[s];
                                              });
                                            },
                                            children: [
                                              (0, _.jsx)("option", {
                                                value: "",
                                                children: "自动",
                                              }),
                                              i.map((e) =>
                                                (0, _.jsx)(
                                                  "option",
                                                  {
                                                    value: e.name,
                                                    children:
                                                      e.name +
                                                      (e.localService
                                                        ? " - 本地语音"
                                                        : " - 网络语音"),
                                                  },
                                                  e.name,
                                                ),
                                              ),
                                            ],
                                          }),
                                        ],
                                      },
                                      s,
                                    );
                                  }),
                                }),
                                (0, _.jsx)(_e.A, {
                                  interactionKind: "click",
                                  content: (0, _.jsx)("div", {
                                    style: {
                                      padding: 10,
                                      maxHeight: 400,
                                      overflowY: "auto",
                                      overscrollBehavior: "contain",
                                    },
                                    children: (0, _.jsxs)(Cn._, {
                                      bordered: !0,
                                      compact: !0,
                                      striped: !0,
                                      children: [
                                        (0, _.jsx)("thead", {
                                          children: (0, _.jsxs)("tr", {
                                            children: [
                                              (0, _.jsx)("th", {
                                                children: "语言",
                                              }),
                                              (0, _.jsx)("th", {
                                                children: "系统语音名称",
                                              }),
                                              (0, _.jsx)("th", {
                                                children: "类型",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, _.jsx)("tbody", {
                                          children: t.value.singleList.map(
                                            (e) => {
                                              const n =
                                                t.value?.singleVoiceMap[e];
                                              return (0, _.jsxs)(
                                                "tr",
                                                {
                                                  children: [
                                                    (0, _.jsx)("td", {
                                                      children: Bi[e] || e,
                                                    }),
                                                    (0, _.jsx)("td", {
                                                      children: n?.name,
                                                    }),
                                                    (0, _.jsx)("td", {
                                                      children: n?.localService
                                                        ? "本地语音"
                                                        : "网络语音",
                                                    }),
                                                  ],
                                                },
                                                e,
                                              );
                                            },
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                  children: (0, _.jsx)("a", {
                                    children:
                                      "查看你的浏览器和操作系统支持的其它语音",
                                  }),
                                }),
                              ],
                            }),
                    ],
                  }),
                  (0, _.jsxs)(u.Z, {
                    children: [
                      (0, _.jsx)(be.H4, {
                        id: "音量和语速",
                        children: "音量和语速",
                      }),
                      (0, _.jsx)(C.g, {
                        label: "音量",
                        children: (0, _.jsx)(Ri.A, {
                          min: 0,
                          max: 100,
                          stepSize: 1,
                          labelStepSize: 20,
                          value: e.audioVolume,
                          onChange: (e) => {
                            n({ audioVolume: e });
                          },
                        }),
                      }),
                      (0, _.jsx)(C.g, {
                        label: "语速",
                        children: (0, _.jsx)(Ri.A, {
                          min: 0,
                          max: 8,
                          stepSize: 0.01,
                          labelStepSize: 1,
                          value: e.audioRate,
                          onChange: (e) => {
                            n({ audioRate: e });
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        const Vi = E()(F.g2, ["notifySyncOptions"]);
        function qi() {
          const { hasNotifications: e, requestNotifications: n } = {
              hasNotifications: He(Ue),
              requestNotifications: (0, o.useCallback)(
                () => chrome.permissions.request(Ue),
                [],
              ),
            },
            [t, s] = (0, D.A)(Vi);
          return (0, _.jsx)("div", {
            style: { margin: 15 },
            children: (0, _.jsxs)(u.Z, {
              children: [
                (0, _.jsx)(be.H4, { id: "通知", children: "通知" }),
                !e &&
                  (0, _.jsxs)(Je.P, {
                    icon: "info-sign",
                    title: "划词翻译需要获得你的授权才能显示桌面通知",
                    children: [
                      (0, _.jsx)("p", {
                        children:
                          "如果你希望划词翻译给你发送这些桌面通知，请先授权。",
                      }),
                      (0, _.jsx)(v.$, {
                        intent: "primary",
                        onClick: n,
                        text: "允许划词翻译显示通知",
                      }),
                    ],
                  }),
                (0, _.jsx)(C.g, {
                  inline: !0,
                  children: (0, _.jsx)(fn.Sc, {
                    label: "在后台同步设置之后显示通知",
                    checked: t ? t.notifySyncOptions : Vi.notifySyncOptions,
                    onChange: (e) => {
                      s({ notifySyncOptions: e.target.checked });
                    },
                    disabled: !e,
                  }),
                }),
              ],
            }),
          });
        }
        var Yi = t(77907);
        const Zi = [
            { label: "显示弹出页面", value: "show-popup" },
            { label: "开启网页全文翻译", value: "open-webpage-trs" },
            { label: "打开独立翻译窗口", value: "open-panel" },
          ],
          Gi = E()(F.g2, ["popupAction"]);
        function Wi() {
          const [e, n] = (0, D.A)(Gi);
          return (0, _.jsxs)(u.Z, {
            children: [
              (0, _.jsx)(be.H4, { children: "扩展按钮" }),
              (0, _.jsx)(C.g, {
                label: "点击扩展按钮时",
                inline: !0,
                children: (0, _.jsx)(se.z, {
                  inline: !0,
                  options: Zi,
                  selectedValue: e ? e.popupAction : Gi.popupAction,
                  onChange: (e) => {
                    n({ popupAction: e.currentTarget.value });
                  },
                }),
              }),
            ],
          });
        }
        const Ji = { permissions: ["background"] };
        function Xi() {
          window.alert("Firefox 浏览器不支持此功能。");
        }
        const Qi = We
          ? function () {
              return { hasBg: !1, requestBg: Xi, removeBg: Zt() };
            }
          : function () {
              return {
                hasBg: He(Ji),
                requestBg: (0, o.useCallback)(() => {
                  chrome.permissions.request(Ji).catch((e) => {
                    alert("开启失败，错误消息：" + e.message);
                  });
                }, []),
                removeBg: (0, o.useCallback)(() => {
                  chrome.permissions.remove(Ji).catch((e) => {
                    alert("关闭失败，错误消息：" + e.message);
                  });
                }, []),
              };
            };
        function el() {
          const { hasBg: e, requestBg: n, removeBg: t } = Qi();
          return (0, _.jsx)(C.g, {
            helperText: (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)("p", {
                  children: [
                    "如果你希望在关闭浏览器后仍能使用全局快捷键打开独立翻译窗口，请勾选此选项。Windows 系统需要做额外设置，",
                    (0, _.jsx)("a", {
                      href: "https://hcfy.ai/docs/guides/extra#close-browser",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "点击查看详细说明",
                    }),
                    "。",
                  ],
                }),
                "此选项无法同步到账号内。",
              ],
            }),
            children: (0, _.jsx)(fn.Sc, {
              label: "让划词翻译在后台持续运行",
              checked: e || !1,
              onChange: (e) => {
                e.target.checked ? n() : t();
              },
            }),
          });
        }
        const nl = E()(F.g2, ["customAPI", "customAPINames"]);
        function tl() {
          const [e, n] = (0, D.A)(nl),
            [t, s] = (0, o.useState)(!1);
          return (0, _.jsxs)("div", {
            style: { margin: 15 },
            children: [
              (0, _.jsx)(Wi, {}),
              (0, _.jsx)(u.Z, { children: (0, _.jsx)(el, {}) }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, {
                    id: "自定义翻译源",
                    children: "自定义翻译源",
                  }),
                  (0, _.jsx)(C.g, {
                    label: "接口地址",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "划词翻译会从这个接口地址获取自定义翻译源的翻译结果。",
                        (0, _.jsx)("a", {
                          href: "https://hcfy.ai/docs/services/custom-api",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "查看示例",
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.customAPI : nl.customAPI,
                      onChange: (e) => {
                        n({ customAPI: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "翻译源名称",
                    helperText:
                      "按下回车键添加翻译源名称，可输入多个。翻译面板会显示这些翻译源的翻译结果，另外，翻译源也会显示在网页全文翻译的选项中。",
                    children: (0, _.jsx)(Yi.F, {
                      values: e ? e.customAPINames : nl.customAPINames,
                      onChange: (e) => {
                        n({ customAPINames: e });
                      },
                    }),
                  }),
                  (0, _.jsx)(v.$, {
                    loading: t,
                    onClick: () => {
                      const n = e?.customAPINames[0];
                      n
                        ? (s(!0),
                          (0, ce._)({
                            action: "translate",
                            data: {
                              apiCode: n,
                              text: "划词翻译自定义翻译源测试",
                            },
                          }).then(
                            (e) => {
                              (s(!1),
                                e.error
                                  ? window.alert(
                                      "接口报错了。错误消息：\n" +
                                        JSON.stringify(e.error, null, 2),
                                    )
                                  : window.alert(
                                      "调用成功，返回的数据为：\n" +
                                        JSON.stringify(e, null, 2),
                                    ));
                            },
                            (e) => {
                              (s(!1),
                                window.alert(
                                  "接口报错了。错误消息：" + e?.message,
                                ));
                            },
                          ))
                        : window.alert("请至少添加一个翻译源名称");
                    },
                    children: "测试",
                  }),
                ],
              }),
            ],
          });
        }
        const sl = E()(F.g2, [
          "googleType",
          "googleRegion",
          "googleMirror",
          "googleHidePhonetic",
        ]);
        function il() {
          const [e, n] = (0, D.A)(sl);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(C.g, {
                inline: !0,
                label: "镜像地址",
                children: (0, _.jsx)(T.M, {
                  style: { width: 500 },
                  placeholder: "https://translate.googleapis.com",
                  value: e ? e.googleMirror : sl.googleMirror,
                  onChange: (e) => {
                    n({ googleMirror: e.currentTarget.value.trim() });
                  },
                }),
              }),
              (0, _.jsx)(C.g, {
                inline: !0,
                helperText: (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("span", {
                      style: { color: "red" },
                      children: "注意",
                    }),
                    "：切换为“速度",
                    (0, _.jsx)("b", { children: "慢" }),
                    "、准确率",
                    (0, _.jsx)("b", { children: "高" }),
                    "”的谷歌翻译后，每次使用时都会弹出一个浏览器窗口用于获取准确的翻译结果。",
                    (0, _.jsx)("a", {
                      href: "https://hcfy.ai/docs/faqs/why-result-different",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "查看详细说明",
                    }),
                  ],
                }),
                label: "接口类型",
                children: (0, _.jsxs)(se.z, {
                  inline: !0,
                  selectedValue: e ? e.googleType : sl.googleType,
                  onChange: (e) => {
                    n({ googleType: e.currentTarget.value });
                  },
                  children: [
                    (0, _.jsx)(fn.sx, {
                      label: "速度快、准确率低",
                      value: "fast",
                    }),
                    (0, _.jsx)(fn.sx, {
                      label: "速度慢、准确率高",
                      value: "accuracy",
                    }),
                  ],
                }),
              }),
              (0, _.jsx)(C.g, {
                label: "地区",
                inline: !0,
                helperText: (0, _.jsxs)(_.Fragment, {
                  children: [
                    "谷歌翻译已退出中国市场，无法再选择“国内（.cn）”。",
                    (0, _.jsx)("a", {
                      href: "https://hcfy.ai/blog/2022/09/28/ggg",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "查看详情",
                    }),
                  ],
                }),
                children: (0, _.jsxs)(se.z, {
                  inline: !0,
                  selectedValue: e ? e.googleRegion : sl.googleRegion,
                  onChange: (e) => {
                    n({ googleRegion: e.currentTarget.value });
                  },
                  children: [
                    (0, _.jsx)(fn.sx, {
                      label: "国内（.cn）",
                      disabled: !0,
                      value: "cn",
                    }),
                    (0, _.jsx)(fn.sx, { label: "国外（.com）", value: "com" }),
                  ],
                }),
              }),
              (0, _.jsx)(C.g, {
                inline: !0,
                children: (0, _.jsx)(fn.Sc, {
                  label: "隐藏音标",
                  checked: e ? e.googleHidePhonetic : sl.googleHidePhonetic,
                  onChange: (e) => {
                    n({ googleHidePhonetic: e.currentTarget.checked });
                  },
                }),
              }),
            ],
          });
        }
        const ll = [
            { label: "信息技术", value: F.SM.it },
            { label: "金融财经", value: F.SM.finance },
            { label: "机械制造", value: F.SM.machinery },
            { label: "生物医药", value: F.SM.senimed },
            { label: "网络文学", value: F.SM.novel },
            { label: "学术论文", value: F.SM.academic },
            { label: "航空航天", value: F.SM.aerospace },
            { label: "人文社科", value: F.SM.wiki },
            { label: "新闻资讯", value: F.SM.news },
            { label: "法律法规", value: F.SM.law },
            { label: "合同", value: F.SM.contract },
          ],
          rl = (0, _.jsx)(_.Fragment, {
            children: ll.map((e) =>
              (0, _.jsx)(
                "option",
                { value: e.value, children: e.label },
                e.value,
              ),
            ),
          }),
          al = [F.SM.wiki, F.SM.novel];
        function ol(e) {
          return (0, _.jsxs)(yi.g, {
            value: e.value || "",
            onChange: (n) => {
              e.onChange(n.currentTarget.value || null);
            },
            children: [
              (0, _.jsx)("option", { value: "", children: "请选择" }),
              rl,
            ],
          });
        }
        const cl = [
            { label: "电商 - 商品标题", value: F.Du.title },
            { label: "电商 - 商品描述", value: F.Du.description },
            { label: "电商 - 买卖家沟通", value: F.Du.communication },
            { label: "医疗", value: F.Du.medical },
            { label: "社交", value: F.Du.social },
            { label: "金融", value: F.Du.finance },
          ],
          dl = (0, _.jsx)(_.Fragment, {
            children: cl.map((e) =>
              (0, _.jsx)(
                "option",
                { value: e.value, children: e.label },
                e.value,
              ),
            ),
          });
        function hl(e) {
          return (0, _.jsxs)(yi.g, {
            value: e.value || "",
            onChange: (n) => {
              e.onChange(n.currentTarget.value || null);
            },
            children: [
              (0, _.jsx)("option", { value: "", children: "请选择" }),
              dl,
            ],
          });
        }
        const xl = E()(F.g2, [
          "aliDomain",
          "baiduDomain",
          "chatGPTPrompt",
          "chatGPTEndpoint",
          "chatGPTModel",
          "claudePrompt",
          "claudeEndpoint",
          "claudeModel",
          "siliConflowPrompt",
          "siliConflowEndpoint",
          "siliConflowModel",
          "tongYiPrompt",
          "tongYiEndpoint",
          "tongYiModel",
          "lingYiPrompt",
          "lingYiEndpoint",
          "lingYiModel",
          "moonshotPrompt",
          "moonshotEndpoint",
          "moonshotModel",
          "deepSeekPrompt",
          "deepSeekEndpoint",
          "deepSeekModel",
          "zhiPuPrompt",
          "zhiPuEndpoint",
          "zhiPuModel",
          "douBaoPrompt",
          "douBaoEndpoint",
          "douBaoModel",
          "wenXinNewPrompt",
          "wenXinNewEndpoint",
          "wenXinNewModel",
          "wenXinPrompt",
          "wenXinEndpoint",
          "wenXinModel",
          "miniMaxPrompt",
          "miniMaxEndpoint",
          "miniMaxModel",
          "baiChuanPrompt",
          "baiChuanEndpoint",
          "baiChuanModel",
          "geminiPrompt",
          "geminiEndpoint",
          "geminiModel",
          "grokPrompt",
          "grokEndpoint",
          "grokModel",
          "ollamaPrompt",
          "ollamaEndpoint",
          "ollamaModel",
          "hunYuanPrompt",
          "hunYuanEndpoint",
          "hunYuanModel",
          "deeplEndpoint",
        ]);
        function ul() {
          const [e, n] = (0, D.A)(xl);
          return (0, _.jsxs)("div", {
            style: { margin: 15 },
            children: [
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "谷歌翻译" }),
                  (0, _.jsx)(il, {}),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "DeepL" }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "此选项用于在划词翻译中使用第三方 DeepL 中转服务，",
                        (0, _.jsx)("a", {
                          href: "https://hcfy.ai/docs/services/deepl",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "点击查看详细说明",
                        }),
                        "。",
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.deeplEndpoint : xl.deeplEndpoint,
                      onChange: (e) => {
                        n({ deeplEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "Authentication Key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 DeepL，然后点击【管理密钥】按钮填写 DeepL 的 Authentication Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "ChatGPT" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.chatGPTPrompt : xl.chatGPTPrompt,
                      onChange: (e) => {
                        n({ chatGPTPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "此选项用于在划词翻译中使用第三方 ChatGPT 中转服务，",
                        (0, _.jsx)("a", {
                          href: "https://hcfy.ai/docs/services/chatgpt",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "点击查看详细说明",
                        }),
                        "。",
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      placeholder: "https://api.openai.com/v1/chat/completions",
                      value: e ? e.chatGPTEndpoint : xl.chatGPTEndpoint,
                      onChange: (e) => {
                        n({ chatGPTEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ chatGPTModel: "gpt-5.4-nano" });
                              },
                              children: "gpt-5.4-nano",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ chatGPTModel: "gpt-5.4-mini" });
                              },
                              children: "gpt-5.4-mini",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ chatGPTModel: "gpt-5.4" });
                              },
                              children: "gpt-5.4",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/chatgpt#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.chatGPTModel : xl.chatGPTModel,
                      onChange: (e) => {
                        n({ chatGPTModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "Secret Key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 ChatGPT，然后点击【管理密钥】按钮填写 ChatGPT 的 Secret Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "Claude" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.claudePrompt : xl.claudePrompt,
                      onChange: (e) => {
                        n({ claudePrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "此选项用于在划词翻译中使用第三方 Claude 中转服务，",
                        (0, _.jsx)("a", {
                          href: "https://hcfy.ai/docs/services/claude",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "点击查看详细说明",
                        }),
                        "。",
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      placeholder: "https://api.anthropic.com/v1/messages",
                      value: e ? e.claudeEndpoint : xl.claudeEndpoint,
                      onChange: (e) => {
                        n({ claudeEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ claudeModel: "claude-haiku-4-5-20251001" });
                              },
                              children: "claude-haiku-4-5-20251001",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ claudeModel: "claude-sonnet-4-6" });
                              },
                              children: "claude-sonnet-4-6",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/claude#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.claudeModel : xl.claudeModel,
                      onChange: (e) => {
                        n({ claudeModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 Claude，然后点击【管理密钥】按钮填写 Claude 的 API key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "Gemini" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.geminiPrompt : xl.geminiPrompt,
                      onChange: (e) => {
                        n({ geminiPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "镜像地址支持参数",
                        (0, _.jsx)(be.Cy, { children: "{model}" }),
                        "，会替换为你在下方填写的模型。",
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      style: { width: 700 },
                      placeholder:
                        "https://generativelanguage.googleapis.com/v1/models/{model}:generateContent",
                      value: e ? e.geminiEndpoint : xl.geminiEndpoint,
                      onChange: (e) => {
                        n({ geminiEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ geminiModel: "gemini-1.0-pro" });
                              },
                              children: "gemini-1.0-pro",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ geminiModel: "gemini-1.5-flash" });
                              },
                              children: "gemini-1.5-flash",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ geminiModel: "gemini-1.5-pro" });
                              },
                              children: "gemini-1.5-pro",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/gemini#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.geminiModel : xl.geminiModel,
                      onChange: (e) => {
                        n({ geminiModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 Gemini，然后点击【管理密钥】按钮填写 API key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "Grok" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.grokPrompt : xl.grokPrompt,
                      onChange: (e) => {
                        n({ grokPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      style: { width: 700 },
                      placeholder: "https://api.x.ai/v1/chat/completions",
                      value: e ? e.grokEndpoint : xl.grokEndpoint,
                      onChange: (e) => {
                        n({ grokEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ grokModel: "grok-3-mini" });
                              },
                              children: "grok-3-mini",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ grokModel: "grok-3" });
                              },
                              children: "grok-3",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ grokModel: "grok-4" });
                              },
                              children: "grok-4",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/grok#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.grokModel : xl.grokModel,
                      onChange: (e) => {
                        n({ grokModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 Grok，然后点击【管理密钥】按钮填写 API key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "Ollama" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        '会被替换为目标语种，例如"中文(简体)"',
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.ollamaPrompt : xl.ollamaPrompt,
                      onChange: (e) => {
                        n({ ollamaPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API 地址",
                    inline: !0,
                    helperText: (0, _.jsx)(_.Fragment, {
                      children:
                        "Ollama 的 API 端点地址，默认为本地服务地址。 如果使用远程 Ollama 服务，请修改为对应的地址。",
                    }),
                    children: (0, _.jsx)(T.M, {
                      placeholder: "http://localhost:11434/v1/chat/completions",
                      value: e ? e.ollamaEndpoint : xl.ollamaEndpoint,
                      onChange: (e) => {
                        n({ ollamaEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ ollamaModel: "gemma3" });
                              },
                              children: "gemma3",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ ollamaModel: "qwen3" });
                              },
                              children: "qwen3",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ ollamaModel: "llama3.2" });
                              },
                              children: "llama3.2",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/ollama#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.ollamaModel : xl.ollamaModel,
                      onChange: (e) => {
                        n({ ollamaModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "说明",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "Ollama 是一个本地 AI 模型运行工具，完全免费。",
                        (0, _.jsx)("a", {
                          href: "https://hcfy.ai/docs/services/ollama",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "点击查看如何在划词翻译内使用 Ollama",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "硅基流动" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.siliConflowPrompt : xl.siliConflowPrompt,
                      onChange: (e) => {
                        n({ siliConflowPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder:
                        "https://api.siliconflow.cn/v1/chat/completions",
                      value: e ? e.siliConflowEndpoint : xl.siliConflowEndpoint,
                      onChange: (e) => {
                        n({ siliConflowEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({
                                  siliConflowModel: "Qwen/Qwen2.5-7B-Instruct",
                                });
                              },
                              children: "Qwen/Qwen2.5-7B-Instruct",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/siliconflow#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.siliConflowModel : xl.siliConflowModel,
                      onChange: (e) => {
                        n({ siliConflowModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API 密钥",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 硅基流动，然后点击【管理密钥】按钮填写 API 密钥。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "混元大模型" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.hunYuanPrompt : xl.hunYuanPrompt,
                      onChange: (e) => {
                        n({ hunYuanPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      style: { width: 700 },
                      placeholder: "https://hunyuan.tencentcloudapi.com",
                      value: e ? e.hunYuanEndpoint : xl.hunYuanEndpoint,
                      onChange: (e) => {
                        n({ hunYuanEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ hunYuanModel: "hunyuan-lite" });
                              },
                              children: "hunyuan-lite",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ hunYuanModel: "hunyuan-standard" });
                              },
                              children: "hunyuan-standard",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ hunYuanModel: "hunyuan-pro" });
                              },
                              children: "hunyuan-pro",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/hunyuan#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.hunYuanModel : xl.hunYuanModel,
                      onChange: (e) => {
                        n({ hunYuanModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "SecretId & SecretKey",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到混元大模型，然后点击【管理密钥】按钮填写 SecretId & SecretKey。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "文心一言" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder:
                        "将下面的文本翻译为{{target}}并保留段落格式：\n{{text}}",
                      value: e ? e.wenXinNewPrompt : xl.wenXinNewPrompt,
                      onChange: (e) => {
                        n({ wenXinNewPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      style: { width: 700 },
                      placeholder:
                        "https://qianfan.baidubce.com/v2/chat/completions",
                      value: e ? e.wenXinNewEndpoint : xl.wenXinNewEndpoint,
                      onChange: (e) => {
                        n({ wenXinNewEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ wenXinNewModel: "ernie-speed-8k" });
                              },
                              children: "ERNIE Speed 8K",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/wenxin-new#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.wenXinNewModel : xl.wenXinNewModel,
                      onChange: (e) => {
                        n({ wenXinNewModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到文心一言，然后点击【管理密钥】按钮填写 API Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "文心一言（旧）" }),
                  (0, _.jsx)("p", {
                    children:
                      "2025 年 6 月 3 日起，文心一言官方改变了服务申请方式，在这之后申请的用户请使用上方的文心一言。",
                  }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder:
                        "将下面的文本翻译为{{target}}并保留段落格式：\n{{text}}",
                      value: e ? e.wenXinPrompt : xl.wenXinPrompt,
                      onChange: (e) => {
                        n({ wenXinPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "镜像地址支持参数",
                        (0, _.jsx)(be.Cy, { children: "{model}" }),
                        "，会替换为你在下方填写的模型。",
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      style: { width: 700 },
                      placeholder:
                        "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/{model}",
                      value: e ? e.wenXinEndpoint : xl.wenXinEndpoint,
                      onChange: (e) => {
                        n({ wenXinEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ wenXinModel: "ernie_speed" });
                              },
                              children: "ERNIE-Speed-8K",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ wenXinModel: "completions" });
                              },
                              children: "ERNIE-3.5-8K",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ wenXinModel: "completions_pro" });
                              },
                              children: "ERNIE-4.0-8K",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/wenxin#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.wenXinModel : xl.wenXinModel,
                      onChange: (e) => {
                        n({ wenXinModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API key & Secret Key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到文心一言（旧），然后点击【管理密钥】按钮填写 API key & Secret Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "智谱 AI" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.zhiPuPrompt : xl.zhiPuPrompt,
                      onChange: (e) => {
                        n({ zhiPuPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder:
                        "https://open.bigmodel.cn/api/paas/v4/chat/completions",
                      value: e ? e.zhiPuEndpoint : xl.zhiPuEndpoint,
                      onChange: (e) => {
                        n({ zhiPuEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ zhiPuModel: "glm-4-flash" });
                              },
                              children: "glm-4-flash",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ zhiPuModel: "glm-4-air" });
                              },
                              children: "glm-4-air",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ zhiPuModel: "glm-4-airx" });
                              },
                              children: "glm-4-airx",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ zhiPuModel: "glm-4-0520" });
                              },
                              children: "glm-4-0520",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/zhipu#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.zhiPuModel : xl.zhiPuModel,
                      onChange: (e) => {
                        n({ zhiPuModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到智谱 AI，然后点击【管理密钥】按钮填写 API key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "豆包" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.douBaoPrompt : xl.douBaoPrompt,
                      onChange: (e) => {
                        n({ douBaoPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder:
                        "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
                      value: e ? e.douBaoEndpoint : xl.douBaoEndpoint,
                      onChange: (e) => {
                        n({ douBaoEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "接入点 ID",
                    inline: !0,
                    helperText: (0, _.jsx)("a", {
                      href: "https://hcfy.ai/docs/services/doubao#prices",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "点击查看模型介绍以及接入点 ID 的生成方法",
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.douBaoModel : xl.douBaoModel,
                      onChange: (e) => {
                        n({ douBaoModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API Key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到豆包，然后点击【管理密钥】按钮填写 API Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "通义千问" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.tongYiPrompt : xl.tongYiPrompt,
                      onChange: (e) => {
                        n({ tongYiPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder:
                        "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
                      value: e ? e.tongYiEndpoint : xl.tongYiEndpoint,
                      onChange: (e) => {
                        n({ tongYiEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ tongYiModel: "qwen-flash" });
                              },
                              children: "qwen-flash",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ tongYiModel: "qwen-plus" });
                              },
                              children: "qwen-plus",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/tongyi#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.tongYiModel : xl.tongYiModel,
                      onChange: (e) => {
                        n({ tongYiModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API-Key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 通义千问，然后点击【管理密钥】按钮填写通义千问的 API-Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "DeepSeek" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.deepSeekPrompt : xl.deepSeekPrompt,
                      onChange: (e) => {
                        n({ deepSeekPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder: "https://api.deepseek.com/chat/completions",
                      value: e ? e.deepSeekEndpoint : xl.deepSeekEndpoint,
                      onChange: (e) => {
                        n({ deepSeekEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ deepSeekModel: "deepseek-v4-flash" });
                              },
                              children: "deepseek-v4-flash",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ deepSeekModel: "deepseek-v4-pro" });
                              },
                              children: "deepseek-v4-pro",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/deepseek#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.deepSeekModel : xl.deepSeekModel,
                      onChange: (e) => {
                        n({ deepSeekModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 DeepSeek，然后点击【管理密钥】按钮填写 API key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "零一万物" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.lingYiPrompt : xl.lingYiPrompt,
                      onChange: (e) => {
                        n({ lingYiPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder:
                        "https://api.lingyiwanwu.com/v1/chat/completions",
                      value: e ? e.lingYiEndpoint : xl.lingYiEndpoint,
                      onChange: (e) => {
                        n({ lingYiEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ lingYiModel: "yi-spark" });
                              },
                              children: "yi-spark",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ lingYiModel: "yi-medium" });
                              },
                              children: "yi-medium",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ lingYiModel: "yi-large-turbo" });
                              },
                              children: "yi-large-turbo",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ lingYiModel: "yi-large" });
                              },
                              children: "yi-large",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/lingyi#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.lingYiModel : xl.lingYiModel,
                      onChange: (e) => {
                        n({ lingYiModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API Key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到零一万物，然后点击【管理密钥】按钮填写 API Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "MiniMax（海螺 AI）" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.miniMaxPrompt : xl.miniMaxPrompt,
                      onChange: (e) => {
                        n({ miniMaxPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder:
                        "https://api.minimax.chat/v1/text/chatcompletion_v2",
                      value: e ? e.miniMaxEndpoint : xl.miniMaxEndpoint,
                      onChange: (e) => {
                        n({ miniMaxEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ miniMaxModel: "abab5.5s-chat" });
                              },
                              children: "abab5.5s-chat",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ miniMaxModel: "abab6.5s-chat" });
                              },
                              children: "abab6.5s-chat",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ miniMaxModel: "abab5.5-chat" });
                              },
                              children: "abab5.5-chat",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/minimax#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.miniMaxModel : xl.miniMaxModel,
                      onChange: (e) => {
                        n({ miniMaxModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API 密钥",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 MiniMax（海螺 AI），然后点击【管理密钥】按钮填写 API 密钥。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "百川智能（百小应）" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.baiChuanPrompt : xl.baiChuanPrompt,
                      onChange: (e) => {
                        n({ baiChuanPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder:
                        "https://api.baichuan-ai.com/v1/chat/completions",
                      value: e ? e.baiChuanEndpoint : xl.baiChuanEndpoint,
                      onChange: (e) => {
                        n({ baiChuanEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ baiChuanModel: "baichuan2-turbo" });
                              },
                              children: "baichuan2-turbo",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ baiChuanModel: "baichuan3-turbo" });
                              },
                              children: "baichuan3-turbo",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ baiChuanModel: "baichuan4" });
                              },
                              children: "baichuan4",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/baichuan#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.baiChuanModel : xl.baiChuanModel,
                      onChange: (e) => {
                        n({ baiChuanModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API Key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到百川智能（百小应），然后点击【管理密钥】按钮填写 API Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "Moonshot (Kimi)" }),
                  (0, _.jsx)(C.g, {
                    label: "翻译命令",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("code", { children: ["{{", "text", "}}"] }),
                        " ",
                        "会被替换为你划选 / 输入的文本。",
                        (0, _.jsx)("b", {
                          children: "此参数必须要包含进翻译命令中",
                        }),
                        (0, _.jsx)("br", {}),
                        (0, _.jsxs)("code", {
                          children: ["{{", "target", "}}"],
                        }),
                        " ",
                        "会被替换为目标语种，例如”中文(简体)”",
                      ],
                    }),
                    children: (0, _.jsx)(at.f, {
                      fill: !0,
                      placeholder: "将下面的文本翻译为{{target}}：\n{{text}}",
                      value: e ? e.moonshotPrompt : xl.moonshotPrompt,
                      onChange: (e) => {
                        n({ moonshotPrompt: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "镜像地址",
                    inline: !0,
                    children: (0, _.jsx)(T.M, {
                      placeholder:
                        "https://api.moonshot.cn/v1/chat/completions",
                      value: e ? e.moonshotEndpoint : xl.moonshotEndpoint,
                      onChange: (e) => {
                        n({ moonshotEndpoint: e.target.value.trim() });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "模型",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          style: { marginBottom: 4 },
                          children: [
                            "常用模型：",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ moonshotModel: "moonshot-v1-8k" });
                              },
                              children: "moonshot-v1-8k",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ moonshotModel: "moonshot-v1-32k" });
                              },
                              children: "moonshot-v1-32k",
                            }),
                            "、",
                            (0, _.jsx)("a", {
                              onClick: () => {
                                n({ moonshotModel: "moonshot-v1-128k" });
                              },
                              children: "moonshot-v1-128k",
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          children: (0, _.jsx)("a", {
                            href: "https://hcfy.ai/docs/services/moonshot#prices",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "点击查看模型介绍",
                          }),
                        }),
                      ],
                    }),
                    children: (0, _.jsx)(T.M, {
                      value: e ? e.moonshotModel : xl.moonshotModel,
                      onChange: (e) => {
                        n({ moonshotModel: e.target.value });
                      },
                    }),
                  }),
                  (0, _.jsx)(C.g, {
                    label: "API Key",
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        "请前往",
                        (0, _.jsx)("a", {
                          href: (0, c.$P)("/services"),
                          children: "服务申请",
                        }),
                        "找到 Moonshot (Kimi)，然后点击【管理密钥】按钮填写 API Key。",
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "百度翻译（专业版）" }),
                  (0, _.jsx)(C.g, {
                    label: "专业领域",
                    inline: !0,
                    helperText: (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("p", {
                          children:
                            "百度翻译专业版仅支持在中文和英文之间互译。用于其它语种时会报错，或显示普通的百度翻译结果。",
                        }),
                        e?.baiduDomain &&
                          al.includes(e.baiduDomain) &&
                          (0, _.jsxs)("div", {
                            children: [
                              (0, _.jsx)("span", {
                                style: { color: "red" },
                                children: "注意：",
                              }),
                              "【网络文学】和【人文社科】这两个领域仅支持从中文翻译为英文。",
                            ],
                          }),
                      ],
                    }),
                    children: (0, _.jsx)(ol, {
                      value: e?.baiduDomain,
                      onChange: (e) => {
                        n({ baiduDomain: e });
                      },
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(u.Z, {
                children: [
                  (0, _.jsx)(be.H4, { children: "阿里翻译（专业版）" }),
                  (0, _.jsx)(C.g, {
                    label: "专业领域",
                    inline: !0,
                    children: (0, _.jsx)(hl, {
                      value: e?.aliDomain,
                      onChange: (e) => {
                        n({ aliDomain: e });
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        const pl = E()(F.g2, ["panelPos", "panelFocus"]);
        function gl() {
          const [e, n] = (0, D.A)(pl);
          return (0, _.jsxs)("div", {
            style: { margin: 15 },
            children: [
              (0, _.jsxs)(Je.P, {
                title: "关于独立翻译窗口",
                style: { marginBottom: 15 },
                children: [
                  "独立翻译窗口是独立于浏览器而存在的一个翻译面板，它的主要作用是配合全局快捷键翻译浏览器外的内容。",
                  (0, _.jsx)("a", {
                    href: "https://hcfy.ai/docs/guides/extra",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "查看独立翻译窗口介绍",
                  }),
                ],
              }),
              e &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsxs)(u.Z, {
                      children: [
                        (0, _.jsx)(be.H4, { children: "位置和宽高" }),
                        (0, _.jsxs)(C.g, {
                          helperText:
                            "每当你对独立窗口进行调整后都会自动保存位置和宽高。",
                          children: [
                            (0, _.jsxs)("p", {
                              children: [
                                "上边距：",
                                e.panelPos.top,
                                "px 左边距：",
                                e.panelPos.left,
                                "px",
                                (0, _.jsx)("br", {}),
                                "宽度：",
                                e.panelPos.width,
                                "px 高度：",
                                e.panelPos.height,
                                "px",
                              ],
                            }),
                            (0, _.jsx)(v.$, {
                              onClick: () => {
                                (n({ panelPos: pl.panelPos }),
                                  (0, ce._)({ action: "update panel pos" }));
                              },
                              children: "重置位置与大小",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(u.Z, {
                      children: (0, _.jsx)(C.g, {
                        children: (0, _.jsx)(fn.Sc, {
                          labelElement: (0, _.jsxs)(_.Fragment, {
                            children: [
                              "不要获取焦点",
                              " ",
                              (0, _.jsxs)(Fe, {
                                children: [
                                  "勾选此选项后，若独立翻译窗口已经存在，那么使用“打开独立翻译窗口”的快捷键时它将不会获取到焦点。焦点将始终处于你正在使用的软件中，不需要你额外点击一下。",
                                  (0, _.jsx)("b", {
                                    children:
                                      "注意：这会导致独立翻译窗口无法出现在屏幕最前方，",
                                  }),
                                  "你需要确保独立翻译窗口不被其它窗口遮挡，或者",
                                  (0, _.jsx)("a", {
                                    href: "https://hcfy.ai/docs/guides/extra#always-on-top",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children:
                                      "使用第三方软件将独立翻译窗口置顶",
                                  }),
                                  "。",
                                ],
                              }),
                            ],
                          }),
                          checked: !(e ? e.panelFocus : pl.panelFocus),
                          onChange: (e) => {
                            n({ panelFocus: !e.currentTarget.checked });
                          },
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function jl() {
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsxs)("p", {
                children: [
                  "翻译积分已不再出售，请购买套餐包。",
                  (0, _.jsx)("b", {
                    children: "已经购买的翻译积分仍可继续使用。",
                  }),
                ],
              }),
              (0, _.jsx)(v.$, {
                intent: "primary",
                icon: "translate",
                text: "购买翻译积分",
                disabled: !0,
              }),
            ],
          });
        }
        function ml() {
          const { setShowVip: e } = (0, o.useContext)(Se);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(v.$, {
                intent: "primary",
                icon: "crown",
                text: "购买会员",
                onClick: () => {
                  e(!0);
                },
              }),
              (0, _.jsx)("p", {
                style: { marginTop: 8 },
                className: `${h.E4k} ${h.KJG}`,
                children:
                  "解除所有功能的使用次数限制，但不能直接使用服务，仍需要自行申请。",
              }),
              (0, _.jsx)("p", {
                style: { marginTop: 8 },
                className: `${h.E4k} ${h.KJG}`,
                children:
                  "购买永久会员后，再购买套餐包时，套餐包内的额度会额外赠送一些。",
              }),
            ],
          });
        }
        function yl() {
          const { setShowBuyPackage: e, setShowBuyTraffic: n } = (0,
          o.useContext)(Se);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(v.$, {
                intent: "primary",
                icon: "crown",
                text: "购买套餐包",
                onClick: () => {
                  e(!0);
                },
              }),
              (0, _.jsx)("p", {
                style: { marginBottom: 25, marginTop: 8 },
                className: `${h.E4k} ${h.KJG}`,
                children:
                  "解除所有功能的使用次数限制，且可以直接使用划词翻译内的所有服务。直接使用服务会消耗套餐包内提供的额度，如果你已经单独购买过永久会员，则会有额外的额度。",
              }),
              (0, _.jsx)(v.$, {
                intent: "primary",
                icon: "crown",
                text: "购买流量包",
                onClick: () => {
                  n(!0);
                },
              }),
              (0, _.jsx)("p", {
                style: { marginTop: 8 },
                className: `${h.E4k} ${h.KJG}`,
                children: "套餐包内的额度用完后，可以购买流量包继续使用服务。",
              }),
            ],
          });
        }
        function fl() {
          return (0, _.jsxs)("div", {
            style: { margin: "15px", width: 700 },
            children: [
              (0, _.jsxs)(Je.P, {
                title: "商店",
                style: { marginBottom: 20 },
                children: [
                  (0, _.jsx)("p", { children: "划词翻译提供以下购买项。" }),
                  (0, _.jsx)(v.A, {
                    small: !0,
                    icon: "info-sign",
                    href: "https://hcfy.ai/docs/pricing/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "点击查看购买项的详细介绍",
                  }),
                ],
              }),
              (0, _.jsx)(u.Z, {
                children: (0, _.jsxs)(on.t, {
                  id: "hcfy-store",
                  children: [
                    (0, _.jsx)(cn.o, {
                      id: "package",
                      title: "购买套餐包",
                      panel: (0, _.jsx)(yl, {}),
                    }),
                    (0, _.jsx)(cn.o, {
                      id: "vip",
                      title: "单独购买会员",
                      panel: (0, _.jsx)(ml, {}),
                    }),
                    (0, _.jsx)(cn.o, {
                      id: "points",
                      title: "单独购买翻译积分",
                      panel: (0, _.jsx)(jl, {}),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        (0, un.x)();
        const vl = document.getElementById("app");
        if (!vl) throw new Error("DOM 里没有 #app 元素。");
        (0, s.H)(vl).render(
          (0, _.jsx)(c.I9, {
            children: (0, _.jsx)(hi, {
              children: (0, _.jsx)(c.BV, {
                children: (0, _.jsxs)(c.qh, {
                  path: "/",
                  element: (0, _.jsx)(an, {}),
                  children: [
                    (0, _.jsx)(c.qh, {
                      index: !0,
                      element: (0, _.jsx)(c.C5, { to: "/shortcut" }),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "store",
                      element: (0, _.jsx)(fl, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "shortcut",
                      element: (0, _.jsx)(mi, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "appearance",
                      element: (0, _.jsx)(Ni, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "audio",
                      element: (0, _.jsx)(Ui, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "notifications",
                      element: (0, _.jsx)(qi, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "services-options",
                      element: (0, _.jsx)(ul, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "other",
                      element: (0, _.jsx)(tl, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "user",
                      element: (0, _.jsx)(yn, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "cross",
                      element: (0, _.jsx)(Un, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "fulltext",
                      element: (0, _.jsx)(Zn, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "pdf",
                      element: (0, _.jsx)(Qn, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "services",
                      element: (0, _.jsx)(zt, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "history",
                      element: (0, _.jsx)(di, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "stars",
                      element: (0, _.jsx)(As, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "about",
                      element: (0, _.jsx)(Ls, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "panel",
                      element: (0, _.jsx)(Xs, {}),
                    }),
                    (0, _.jsx)(c.qh, {
                      path: "standalone",
                      element: (0, _.jsx)(gl, {}),
                    }),
                  ],
                }),
              }),
            }),
          }),
        );
      },
      54712: (e, n, t) => {
        t.d(n, { $: () => i, T: () => s });
        const s = [
            { value: "translate", label: "翻译这段文本" },
            { value: "open-link-in-viewer", label: "在划词翻译中打开此 PDF" },
            { value: "screen-translate", label: "截图翻译" },
            { value: "page-translate", label: "网页全文翻译" },
            { value: "video-translate", label: "音视频翻译" },
          ],
          i = s.map((e) => e.value);
      },
      62337: (e, n, t) => {
        t.d(n, {
          dd: () => s.dd,
          pb: () => s.pb,
          O: () => s.O,
          Zi: () => s.Zi,
          P9: () => s.P9,
          PD: () => s.PD,
          UU: () => s.UU,
        });
        t(96959);
        var s = t(54493);
      },
      74976: (e, n, t) => {
        t.d(n, { _: () => s });
        const s = AbortSignal.timeout
          ? function (e) {
              return AbortSignal.timeout(e);
            }
          : function (e) {
              const n = new AbortController();
              return (
                setTimeout(() => {
                  n.abort();
                }, e),
                n.signal
              );
            };
      },
    },
    r = {};
  function a(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var t = (r[e] = { id: e, loaded: !1, exports: {} });
    return (l[e].call(t.exports, t, t.exports, a), (t.loaded = !0), t.exports);
  }
  ((a.m = l),
    (e = []),
    (a.O = (n, t, s, i) => {
      if (!t) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [t, s, i] = e[d], r = !0, o = 0; o < t.length; o++)
            (!1 & i || l >= i) && Object.keys(a.O).every((e) => a.O[e](t[o]))
              ? t.splice(o--, 1)
              : ((r = !1), i < l && (l = i));
          if (r) {
            e.splice(d--, 1);
            var c = s();
            void 0 !== c && (n = c);
          }
        }
        return n;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [t, s, i];
    }),
    (a.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return (a.d(n, { a: n }), n);
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (e, s) {
      if ((1 & s && (e = this(e)), 8 & s)) return e;
      if ("object" == typeof e && e) {
        if (4 & s && e.__esModule) return e;
        if (16 & s && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      a.r(i);
      var l = {};
      n = n || [null, t({}), t([]), t(t)];
      for (
        var r = 2 & s && e;
        ("object" == typeof r || "function" == typeof r) && !~n.indexOf(r);
        r = t(r)
      )
        Object.getOwnPropertyNames(r).forEach((n) => (l[n] = () => e[n]));
      return ((l.default = () => e), a.d(i, l), i);
    }),
    (a.d = (e, n) => {
      for (var t in n)
        a.o(n, t) &&
          !a.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((n, t) => (a.f[t](e, n), n), []))),
    (a.u = (e) =>
      ({
        231: "blueprint-icons-split-paths-by-size-loader",
        824: "blueprint-icons-all-paths-loader",
        860: "blueprint-icons-all-paths",
      })[e] + ".js"),
    (a.miniCssF = (e) => {}),
    (a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (s = {}),
    (i = "browser-extension:"),
    (a.l = (e, n, t, l) => {
      if (s[e]) s[e].push(n);
      else {
        var r, o;
        if (void 0 !== t)
          for (
            var c = document.getElementsByTagName("script"), d = 0;
            d < c.length;
            d++
          ) {
            var h = c[d];
            if (
              h.getAttribute("src") == e ||
              h.getAttribute("data-webpack") == i + t
            ) {
              r = h;
              break;
            }
          }
        (r ||
          ((o = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          a.nc && r.setAttribute("nonce", a.nc),
          r.setAttribute("data-webpack", i + t),
          (r.src = e)),
          (s[e] = [n]));
        var x = (n, t) => {
            ((r.onerror = r.onload = null), clearTimeout(u));
            var i = s[e];
            if (
              (delete s[e],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((e) => e(t)),
              n)
            )
              return n(t);
          },
          u = setTimeout(
            x.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        ((r.onerror = x.bind(null, r.onerror)),
          (r.onload = x.bind(null, r.onload)),
          o && document.head.appendChild(r));
      }
    }),
    (a.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (a.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (a.p = ""),
    (() => {
      var e = { 830: 0 };
      ((a.f.j = (n, t) => {
        var s = a.o(e, n) ? e[n] : void 0;
        if (0 !== s)
          if (s) t.push(s[2]);
          else {
            var i = new Promise((t, i) => (s = e[n] = [t, i]));
            t.push((s[2] = i));
            var l = a.p + a.u(n),
              r = new Error();
            a.l(
              l,
              (t) => {
                if (a.o(e, n) && (0 !== (s = e[n]) && (e[n] = void 0), s)) {
                  var i = t && ("load" === t.type ? "missing" : t.type),
                    l = t && t.target && t.target.src;
                  ((r.message =
                    "Loading chunk " + n + " failed.\n(" + i + ": " + l + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = i),
                    (r.request = l),
                    s[1](r));
                }
              },
              "chunk-" + n,
              n,
            );
          }
      }),
        (a.O.j = (n) => 0 === e[n]));
      var n = (n, t) => {
          var s,
            i,
            [l, r, o] = t,
            c = 0;
          if (l.some((n) => 0 !== e[n])) {
            for (s in r) a.o(r, s) && (a.m[s] = r[s]);
            if (o) var d = o(a);
          }
          for (n && n(t); c < l.length; c++)
            ((i = l[c]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
          return a.O(d);
        },
        t = (globalThis.webpackChunkbrowser_extension =
          globalThis.webpackChunkbrowser_extension || []);
      (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
    })());
  var o = a.O(void 0, [698, 318, 441, 972, 477, 557, 9, 384, 62], () =>
    a(54565),
  );
  o = a.O(o);
})();
