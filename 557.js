"use strict";
(globalThis.webpackChunkbrowser_extension =
  globalThis.webpackChunkbrowser_extension || []).push([
  [557],
  {
    1783: (e, t, s) => {
      s.d(t, { V: () => r });
      let r = (function (e) {
        return (
          (e.GET_TOKEN_FAILED = "GET_TOKEN_FAILED"),
          (e.UNSUPPORTED_LANGUAGE = "UNSUPPORTED_LANGUAGE"),
          (e.API_SERVER_ERROR = "API_SERVER_ERROR"),
          (e.NETWORK_ERROR = "NETWORK_ERROR"),
          (e.NEED_LOGIN = "NEED_LOGIN"),
          (e.NO_POINTS = "NO_POINTS"),
          (e.NEED_KEY = "NEED_KEY"),
          (e.NEED_DOMAIN = "NEED_DOMAIN"),
          (e.VIP_OUTDATED = "VIP_OUTDATED"),
          (e.OTHER = "OTHER"),
          e
        );
      })({});
    },
    10133: (e, t, s) => {
      s.d(t, { c: () => l });
      (s(69375), s(81045), s(30163));
      var r = s(29842),
        n = s(20843),
        i = s(16321),
        c = s(54563),
        o = s(78303);
      function a(e, t) {
        const s = e.indexOf(t);
        s < 0 || (e.splice(s, 1), e.push(t));
      }
      const h = {
        name: "为什么此服务需要自行申请之后才能使用？",
        url: "https://hcfy.ai/docs/faqs/why-apply",
      };
      class l {
        constructor(e, t = !1) {
          ((this.service = e),
            (this.service = e),
            (this.retry =
              "boolean" == typeof t
                ? { secretKey: t, free: t, package: t }
                : t),
            (this.isFreeOnly = (0, n.tk)(e)),
            (this.isPointsOnly = (0, n.u6)(e)),
            (this.isSecretKeyOnly = (0, n.U4)(e)),
            (this.isPackageOnly = (0, n.zr)(e)));
        }
        retryInner(e, t) {
          return (0, i.L)(e, {
            count: t ? 2 : 0,
            beforeRetry: (e) => !!(e instanceof r.Fw && e.noRetry),
          });
        }
        async isAllowPoints() {
          return !this.service.pointsEnable || this.service.pointsEnable.get();
        }
        setSecretKeys(e) {
          return this.service.secretKeys
            ? this.service.secretKeys.set(e)
            : Promise.reject(
                new Error(
                  `划词翻译内部错误：${this.service.name}不支持通过密钥使用，但却错误的调用了写入密钥的方法。`,
                ),
              );
        }
        async getSecretKeys() {
          if (!this.service.secretKeys)
            throw new Error(
              `划词翻译内部错误：${this.service.name}不支持通过密钥使用，但却错误的调用了读取密钥的方法。`,
            );
          const e = await this.service.secretKeys.get(),
            t = e.filter(this.service.secretKeys.isComplete);
          return { allKeys: e, keys: t };
        }
        async callBySecretKeysInner(e, t) {
          const { allKeys: s, keys: n } = await this.getSecretKeys();
          if (!n.length)
            throw (
              (e.noSecretKeys = !0),
              new r.Fw(`没有为${this.service.name}配置密钥。`, { link: h })
            );
          let i = !1;
          const c = [];
          for (const e of n)
            try {
              const r = await this.retryInner(
                () => this.callBySecretKey(e, t),
                this.retry.secretKey,
              );
              return (
                i &&
                  this.setSecretKeys(s).catch((e) => {
                    console.error(e);
                  }),
                r
              );
            } catch (t) {
              (c.push(t), (i = !0), a(s, e));
            }
          if (1 === c.length) {
            const e = (0, r.xh)(c[0]);
            throw ((e.message = `${e.message}`), e);
          }
          throw new r.Fw(`${this.service.name}的所有密钥都报错了。`, {
            errors: c,
          });
        }
        callByFree(e) {
          throw new Error(
            `划词翻译内部错误：没有为${this.service.name}提供免费试用的具体实现。`,
          );
        }
        callByFreeInner(e) {
          return this.retryInner(() => this.callByFree(e), this.retry.free);
        }
        callBySecretKey(e, t) {
          throw new Error(
            `划词翻译内部错误：没有为${this.service.name}提供通过密钥使用的具体实现。`,
          );
        }
        callByPackage(e) {
          throw new Error(
            `划词翻译内部错误：没有为${this.service.name}提供通过套餐包使用的具体实现。`,
          );
        }
        async callByPackageInner(e, t) {
          let s = await chrome.storage.local
            .get("user")
            .then(({ user: e }) => e);
          if (
            (s &&
              !(0, c.f)(s) &&
              s.packageEndTime &&
              ((s = await (0, o.x)({ timeout: 2e3 })),
              s || (e.sessionExpired = !0)),
            (0, c.f)(s))
          )
            return this.retryInner(
              () => this.callByPackage(t),
              this.retry.package,
            );
          if (e.sessionExpired)
            throw new r.Fw("划词翻译账号的登录状态已失效，请重新登录。", {
              type: r.VC.NEED_LOGIN,
              link: h,
            });
          throw s
            ? new r.Fw("通过套餐包使用服务时需要先购买套餐包。", {
                type: r.VC.NO_POINTS,
                link: h,
              })
            : ((e.neverBoughtPackage = !0),
              new r.Fw("请先登录划词翻译账号。", {
                type: r.VC.NO_POINTS,
                link: h,
              }));
        }
        callByPoints(e) {
          throw new Error(
            `划词翻译内部错误：没有为${this.service.name}提供通过翻译积分使用的具体实现。`,
          );
        }
        async callByPointsInner(e, t) {
          const [s, n] = await Promise.all([
            chrome.storage.local.get("user").then(({ user: e }) => e),
            this.isAllowPoints(),
          ]);
          if (n && s && s.points && s.points > 0) return this.callByPoints(t);
          if (s) {
            if (s.points) {
              if (!n)
                throw new Error(
                  `请先前往【服务申请】启用${this.service.name}的翻译积分。`,
                );
              throw new r.Fw(
                "翻译积分余额不足，请前往【服务申请】购买翻译积分。",
                { type: r.VC.NO_POINTS, link: h },
              );
            }
            throw (
              (e.neverBoughtPoints = !0),
              new r.Fw("通过翻译积分使用服务时需要先购买翻译积分。", {
                type: r.VC.NO_POINTS,
                link: h,
              })
            );
          }
          throw (
            (e.neverBoughtPoints = !0),
            new r.Fw("请先登录划词翻译账号。", {
              type: r.VC.NO_POINTS,
              link: h,
            })
          );
        }
        async call(e) {
          const t = [],
            s = [],
            n = {};
          if (
            (this.service.secretKeys &&
              (t.push(() => this.callBySecretKeysInner(n, e)), s.push("密钥")),
            this.service.package &&
              (t.push(() => this.callByPackageInner(n, e)), s.push("套餐包")),
            this.service.points &&
              (t.push(() => this.callByPointsInner(n, e)), s.push("翻译积分")),
            this.service.free &&
              (t.push(() => this.callByFreeInner(e)), s.push("免费试用")),
            !t.length)
          )
            throw new Error(
              `划词翻译内部错误：没有为${this.service.name}定义使用方式。`,
            );
          const i = [],
            c = {};
          for (let e = 0; e < s.length; e += 1) {
            const n = t[e];
            try {
              return await n();
            } catch (t) {
              c[s[e]] = t;
              const n = (0, r.xh)(t).clone();
              ((n.message = `${s[e]}报错信息：“${n.message}”`), i.push(n));
            }
          }
          if (this.isPackageOnly) {
            if (n.neverBoughtPackage)
              throw new r.Fw(
                `${this.service.name}只能通过套餐包使用，请前往【服务申请】购买套餐包。`,
                { type: r.VC.NO_POINTS, link: h },
              );
            throw c["套餐包"];
          }
          if (this.isPointsOnly) {
            if (n.neverBoughtPoints)
              throw new r.Fw(
                `${this.service.name}只能付费使用，请前往【服务申请】购买翻译积分。`,
                { type: r.VC.NO_POINTS, link: h },
              );
            throw c["翻译积分"];
          }
          if (this.isFreeOnly) throw c["免费试用"];
          if (this.isSecretKeyOnly) {
            if (n.noSecretKeys)
              throw new r.Fw(
                `${this.service.name}只能自行申请密钥使用，请前往【服务申请】进行配置。`,
                { type: r.VC.NEED_KEY, link: h },
              );
            throw c["密钥"];
          }
          if (
            (!this.service.secretKeys || n.noSecretKeys) &&
            (!this.service.points || n.neverBoughtPoints) &&
            (!this.service.package || n.neverBoughtPackage)
          )
            throw this.service.free
              ? c["免费试用"]
              : new r.Fw(
                  `${this.service.name}需要自行申请后使用，请前往【服务申请】查看申请步骤。`,
                  { type: r.VC.NEED_KEY, link: h },
                );
          throw new r.Fw(
            `尝试通过${s.join("、")}使用${this.service.name}时均失败了。`,
            { type: r.VC.NEED_KEY, errors: i },
          );
        }
      }
    },
    12980: (e, t, s) => {
      s(69375);
    },
    16321: (e, t, s) => {
      s.d(t, { L: () => n });
      const r = { delay: 0, count: 2, beforeRetry: () => !1 };
      function n(e, t) {
        const s = t ? Object.assign({}, r, t) : r;
        if (s.count <= 0) return e();
        let n = 0;
        const i = () =>
          e().catch((e) =>
            n < s.count && ((n += 1), !s.beforeRetry(e))
              ? new Promise((e, t) => {
                  setTimeout(() => {
                    i().then(e, t);
                  }, s.delay);
                })
              : Promise.reject(e),
          );
        return i();
      }
    },
    22025: (e, t, s) => {
      function r(e) {
        return "object" == typeof e && null != e && "__messaging" in e;
      }
      s.d(t, { v: () => r });
    },
    51934: (e, t, s) => {
      s(46123);
    },
    56357: (e, t, s) => {
      s.d(t, { m: () => c });
      s(64727);
      var r = s(10133),
        n = s(7276),
        i = s(29842);
      class c extends r.c {
        isSuccessResponse(e) {
          return !0;
        }
        throwErrorResponse(e) {
          throw new i.Fw(`${this.service.name}抛出了一个错误，但未被处理。`, {
            context: e,
          });
        }
        async callByPoints(e) {
          const t = (
            await (0, n.cN)("/ocr", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ api: this.service.id, image: e.image }),
            })
          ).serverResponse;
          return (this.isSuccessResponse(t) || this.throwErrorResponse(t), t);
        }
        async ocr(e) {
          const t = await this.call(e);
          return this.transform(t);
        }
      }
    },
    78303: (e, t, s) => {
      s.d(t, { x: () => E });
      var r = s(7276),
        n = s(34843),
        i = s(38792),
        c = s.n(i),
        o = s(20124);
      const a = s.n(o)()("utils/refreshUserInfo"),
        h = 3e5,
        l = 5e3;
      let y = 0,
        w = null;
      async function u() {
        try {
          const { user: e } = await chrome.storage.local.get("user");
          return e || null;
        } catch (e) {
          return (console.error("读取本地的用户信息失败：", e), null);
        }
      }
      function E(e) {
        const { force: t, minInterval: s = h, timeout: i = l } = e || {};
        return w
          ? (a("已有正在进行中的刷新请求，复用它"),
            (function (e, t) {
              return new Promise((s) => {
                const r = setTimeout(() => {
                  (a("等待复用的刷新请求超时，先返回本地现有的用户信息"),
                    s(u()));
                }, t);
                e.then(
                  (e) => {
                    (clearTimeout(r), s(e));
                  },
                  () => {
                    (clearTimeout(r), s(u()));
                  },
                );
              });
            })(w, i))
          : !t && Date.now() - y < s
            ? (a("距离上次刷新的时间太短，跳过这次刷新"), u())
            : ((y = Date.now()),
              (w = (async function (e) {
                try {
                  const t = await u();
                  if (!t) return (a("本地没有用户信息，无需刷新"), null);
                  const s = await (0, r.cN)("/user-info", {
                    signal: (0, n._)(e),
                    silent: !0,
                  });
                  return c()(s, t)
                    ? (a("用户信息没有变化，无需写入 storage"), s)
                    : (await chrome.storage.local.set({ user: s }),
                      a("用户信息已刷新：%o", s),
                      s);
                } catch (e) {
                  return (
                    console.error("刷新用户信息失败：", e),
                    (0, n.NF)(e) && 401 === e.response?.status
                      ? (a("session 已过期，本地的用户信息已被清空"), null)
                      : u()
                  );
                }
              })(i).finally(() => {
                w = null;
              })),
              w);
      }
    },
    99687: (e, t, s) => {
      (s(61412), s(91883), s(70286));
    },
  },
]);
