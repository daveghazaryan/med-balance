function delayedLoad(e, t, n) {
    function i() {
        !l && a() && (l = !0,
            s())
    }

    function a() {
        if (!($(o + ':visible').length > 0))
            return !1;
        var e = $(window).scrollTop()
            , t = e + $(window).height()
            , n = $(o).offset().top
            , i = n + $(o).height();
        return r ? e < n && t > i : n <= t && i >= e
    }

    var s = t || function () {
    }
        , o = e || ''
        , r = n || !1
        , l = !1;
    i(),
        $(window).on('scroll', i),
        $(window).on('click', i)
}

function mediaGallery(e) {
    function t() {
        if ($('#' + e).hasClass('js-gallery-panel--popup')) {
            var t = screen.availHeight;
            y.css({
                height: '',
                width: ''
            }),
                u = 9 * screen.availWidth / 16,
            /iPad|iPhone|iPod/.test(v) && !window.MSStream && (screen.availHeight < screen.availWidth || window.innerHeight < window.innerWidth) && (t = screen.availWidth,
                u = 9 * screen.availHeight / 16),
                b.css('height', u + 'px'),
                f = $('#' + e + ' .js-current-card .js-gallery-panel-card__caption').innerHeight(),
                h = (t - u) / 2 - 22,
                m = (t - k) / 2 - 22,
                l(),
                r(h, m),
                c(f, u),
                d()
        } else {
            var n = y.parent().width();
            y.css({
                height: '',
                width: n + 'px'
            });
            var i = 9 * n / 16;
            b.css('height', i + 'px'),
                p = $('#' + e + ' .js-gallery-panel__header').innerHeight(),
                m = (i - k) / 2 + p,
                g = i + p - T,
                function (e, t) {
                    'ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/) ? x.css({
                        top: t + 'px',
                        visibility: 'visible'
                    }) : x.css({
                        visibility: 'hidden'
                    })
                }(0, g),
                o(m);
            $('#' + e + ' .js-gallery-panel__card-container').css({
                top: '',
                'margin-top': ''
            });
            $('#' + e + ' .js-current-card .js-gallery-panel-card__caption').css({
                top: '',
                bottom: ''
            })
        }
    }

    function n() {
        var e = L.find('.js-gallery-panel-card__image')
            , t = $(z).find('.js-gallery-panel-card__image')
            , n = $(O).find('.js-gallery-panel-card__image');
        i(e),
            i(n),
            i(t)
    }

    function i(t) {
        for (var n = 0; n < t.length; n++) {
            var i = new Image;
            i.onload = function () {
                thisSrc = this.src.substring(this.src.indexOf('/', 8));
                var t = $('#' + e + ' [data-imagesrc$="' + thisSrc + '"]')[0];
                !t || t.src && t.src === this.src || (t.src = this.src)
            }
            ;
            var a = t[n].dataset.imagesrc;
            i.src = a
        }
    }

    function a(e) {
        for (var t = e.previousSibling; t && 1 != t.nodeType;)
            t = t.previousSibling;
        return t
    }

    function s(e) {
        for (var t = e.nextSibling; t && 1 != t.nodeType;)
            t = t.nextSibling;
        return t
    }

    function o(e) {
        j.css('top', e + 'px'),
            _.css('top', e + 'px')
    }

    function r(t, n) {
        var i = $('#' + e + '.js-gallery-panel--popup .js-gallery-panel__card-container');
        screen.availHeight < screen.availWidth || window.innerHeight < window.innerWidth ? (i.addClass('landscape-orientation'),
            /iPad|iPhone|iPod/.test(v) ? (i.css({
                top: '',
                'margin-top': t + 22 + 'px'
            }),
                j.css('top', n + 22 + 'px'),
                _.css('top', n + 22 + 'px')) : (i.css({
                top: '',
                'margin-top': t + 'px'
            }),
                j.css('top', n + 'px'),
                _.css('top', n + 'px'))) : (i.removeClass('landscape-orientation'),
            i.css({
                top: t + 'px',
                'margin-top': ''
            }),
            j.css('top', n + 'px'),
            _.css('top', n + 'px'))
    }

    function l(e, t) {
        y.css('height', e + 'px'),
            w.css({
                height: t + 'px'
            }),
            b.css('height', t + 'px')
    }

    function c(t, n) {
        var i = $('#' + e + '.js-gallery-panel--popup .js-gallery-panel-card__caption');
        (/iPad|iPhone|iPod/.test(v) && !window.MSStream && (screen.availHeight < screen.availWidth || window.innerHeight < window.innerWidth) ? screen.availWidth : screen.availHeight) > n + t ? i.css({
            bottom: ''
        }) : i.css({
            bottom: '0'
        })
    }

    function d() {
        $('#' + e + '.js-gallery-panel--popup .js-gallery-panel-card__media-container').each(function (t) {
            $(this).on('click', function () {
                $('#' + e + '.js-gallery-panel--popup').toggleClass('isolate')
            })
        })
    }

    var u, p, f, h, m, g, v = navigator.userAgent || navigator.vendor || window.opera, y = $('#' + e),
        w = $('#' + e + ' .js-gallery-panel-card'), b = $('#' + e + ' .js-gallery-panel-card__media-container'),
        j = $('#' + e + ' .js-gallery-panel-card__nav--prev > a'),
        _ = $('#' + e + ' .js-gallery-panel-card__nav--next > a'),
        C = $('#' + e + ' .js-gallery-panel__current-card-number'), x = $('#' + e + ' .js-gallery__button--popout'),
        k = 48, T = 48, S = window.location.protocol;
    if ($('.js-gallery-panel-card__image').each(function () {
        var e = $(this).attr('data-imagesrc');
        -1 !== e.indexOf('://') && (e = S + e.substring(e.indexOf('://') + 1),
            $(this).attr('data-imagesrc', e)),
        $(this).src && $(this).attr('src', e)
    }),
        !y.hasClass('js-gallery-panel__loaded')) {
        y.addClass('js-gallery-panel__loaded'),
            C.text(1),
            $('#' + e + ' .js-gallery-panel-card').css('display', 'none');
        var I = $('#' + e + ' .js-gallery-panel-card:first')
            , E = $('#' + e + ' .js-gallery-panel-card:last')
            , P = $('#' + e + ' .js-gallery-panel-card').length
            , L = $('#' + e + ' .js-gallery-panel-card:first');
        L.addClass('js-current-card'),
            L.css('display', '');
        var z = a(L[0])
            , O = s(L[0]);
        t(),
            n();
        var M;
        $('#' + e + ' .js-gallery__button--popout').on('click', function () {
            y.addClass('js-gallery-panel--popup gallery-panel--popup'),
                M = $(window).scrollTop(),
                $('html,body').scrollTop(0),
                t()
        }),
            $('#' + e + ' .js-gallery__button--popin').on('click', function () {
                y.removeClass('js-gallery-panel--popup gallery-panel--popup'),
                    $(window).scrollTop(M),
                    t()
            }),
            window.addEventListener('resize', function (t) {
                if ($('#' + e).hasClass('js-gallery-panel--popup')) {
                    var n = screen.availHeight;
                    u = 9 * screen.availWidth / 16,
                    /iPad|iPhone|iPod/.test(v) && !window.MSStream && (screen.availHeight < screen.availWidth || window.innerHeight < window.innerWidth) && (n = screen.availWidth,
                        u = 9 * screen.availHeight / 16),
                        f = $('#' + e + '.js-gallery-panel--popup .js-current-card .js-gallery-panel-card__caption').innerHeight(),
                        h = (n - u) / 2 - 22,
                        m = (n - k) / 2 - 22,
                        y.css({
                            height: '',
                            width: ''
                        }),
                        b.css({
                            height: u + 'px'
                        }),
                        r(h, m),
                        l(),
                        c(f, u)
                } else {
                    var i = $('#' + e).parent().width()
                        , a = 9 * i / 16;
                    p = $('#' + e + ' .js-gallery-panel__header').innerHeight(),
                        m = (a - k) / 2 + p,
                        y.each(function (e) {
                            $(this).css({
                                height: '',
                                width: ''
                            })
                        }),
                        b.css({
                            height: a + 'px'
                        }),
                        o(m),
                        g = a + p - T,
                        x.css('top', g + 'px')
                }
            }, !0),
            $('#' + e + ' .js-gallery-panel-card__nav--next').on('click', function (e) {
                O ? (L.removeClass('js-current-card'),
                    L.css('display', 'none'),
                    L = $(O),
                    O = s(L[0]),
                    z = a(L[0]),
                    L.addClass('js-current-card'),
                    L.css('display', ''),
                    C.text(parseInt(C.text()) + 1),
                    n()) : (L.removeClass('js-current-card'),
                    L.css('display', 'none'),
                    L = I,
                    O = s(L[0]),
                    z = a(L[0]),
                    L.addClass('js-current-card'),
                    L.css('display', ''),
                    C.text(1),
                    n())
            }),
            $('#' + e + ' .js-gallery-panel-card__nav--prev').on('click', function (e) {
                z ? (L.removeClass('js-current-card'),
                    L.css('display', 'none'),
                    L = $(z),
                    O = s(L[0]),
                    z = a(L[0]),
                    L.addClass('js-current-card'),
                    L.css('display', ''),
                    C.text(parseInt(C.text()) - 1),
                    n()) : (L.removeClass('js-current-card'),
                    L.css('display', 'none'),
                    L = E,
                    O = s(L[0]),
                    z = a(L[0]),
                    L.addClass('js-current-card'),
                    L.css('display', ''),
                    C.text(P),
                    n())
            })
    }
}

function newsPanelController(e) {
    function t() {
        l = {
            target: '#news-list' + r.target,
            endpoints: []
        },
            n(),
            i(),
            a()
    }

    function n() {
        if (!r.skipHealthEssentials) {
            var e = {
                url: r.apis.healthEssentials,
                type: 'posts',
                postCount: 8
            };
            r.healthEssentialsCategories && r.healthEssentialsCategories.length && (e.filters = {
                'filter[category_name]': r.healthEssentialsCategories
            }),
                s(e),
                l.endpoints.push(e)
        }
    }

    function i() {
        if (!r.skipConsultQd) {
            var e = {
                url: r.apis.consultQD,
                type: 'posts',
                postCount: 8
            };
            r.consultQdCategories && (e.filters = {
                'filter[category_name]': r.consultQdCategories
            }),
                s(e),
                l.endpoints.push(e)
        }
    }

    function a() {
        if (!r.skipNewsroom) {
            var e = {
                url: r.apis.newsroom,
                type: 'posts',
                postCount: 8
            };
            r.newsroomCategories && (e.filters = {
                'filter[category_name]': r.newsroomCategories
            }),
                s(e),
                l.endpoints.push(e)
        }
    }

    function s(e) {
        e.filters = e.filters || {},
        r.instDepts && r.instDepts.length && (e.filters['institutes-objectID'] = r.instDepts),
        r.providers && r.providers.length && (e.filters['physicians-NPI'] = r.providers),
        r.tags && r.tags.length && (e.filters['filter[tag]'] = r.tags)
    }

    function o() {
        ccWp(l, r.testTemplate, function () {
            jQuery('#loading-spinner').hide(),
                jQuery('#news-list' + r.target).each(function () {
                    jQuery(this).find('.js-teaser__item:gt(3)').hide(),
                    jQuery(this).children().size() <= 4 && jQuery(this).siblings('.js-teaser__button').hide(),
                    0 === jQuery(this).children().size() && jQuery('#news-section' + r.target).hide()
                })
        })
    }

    var r = e
        , l = {};
    !function () {
        t(),
            delayedLoad('#news-section' + r.target, o)
    }()
}

function playlistEmbed(e, t) {
    kWidget.embed({
        targetId: e,
        wid: '_2207941',
        uiconf_id: 37292221,
        flashvars: {
            streamerType: 'auto',
            IframeCustomPluginCss1: '/assets/styles/vendor/kaltura-playlist-styles.css',
            playlistAPI: {
                containerPosition: 'bottom',
                layout: 'vertical',
                MinClips: 2,
                kpl0Id: t
            }
        }
    })
}

function videoEmbed(e, t) {
    kWidget.embed({
        targetId: e,
        wid: '_2207941',
        uiconf_id: 37292221,
        flashvars: {
            streamerType: 'auto',
            IframeCustomPluginCss1: '/assets/styles/vendor/kaltura-styles.css'
        },
        entry_id: t
    })
}

window.atozController = function (e, t, n, i, a, s) {
    function o() {
        jQuery.ajax({
            url: t,
            type: 'POST',
            data: a,
            context: this,
            beforeSend: function () {
                p(!0)
            },
            success: function (e) {
                u(e)
            },
            error: function (e) {
                console.log('error', e)
            },
            complete: function () {
                p(!1)
            }
        })
    }

    function r(e) {
        var t = jQuery(e.target)
            , s = window.innerWidth;
        if (t.hasClass('js-disabled') || t.hasClass('js-selected'))
            return !1;
        jQuery('.' + i + ' .js-enabled').removeClass('selected js-selected ' + i),
        s < 900 && jQuery('.' + i + ' .js-selected').hide();
        var o = t.text();
        return t.addClass('selected'),
            t.addClass(i + ' js-selected'),
        s < 900 && (t.show(),
            jQuery('.js-return-link').hide(),
            jQuery('.js-az-letter').find('a').not('.js-selected').hide(),
            jQuery('.js-panel-title').hide(),
        t.hasClass('js-selected') && jQuery('.js-return-link').show()),
            jQuery.ajax({
                url: n,
                type: 'POST',
                data: jQuery.extend({
                    letter: o
                }, a),
                context: t,
                beforeSend: function () {
                    p(!0)
                },
                success: function (e) {
                    l(e)
                },
                error: function (e) {
                    console.log('error', e)
                },
                complete: function () {
                    p(!1)
                }
            }),
            !1
    }

    function l(e) {
        for (var t = jQuery('.' + i + '.js-az-content'), n = '', a = 0; a < e.length; a++)
            e[a].url && e[a].url.length ? n += '<a class="index-list-link" href="' + e[a].url + '">' + e[a].title + '</a>' : n += '<span class="index-list-link">' + e[a].title + '</span>';
        t.html(n),
            c()
    }

    function c() {
        var e = jQuery('.' + i + '.js-az-content > .index-list-link')
            , t = Math.ceil(e.length / 3)
            , n = Math.ceil((e.length - t) / 2);
        e.slice(0, t).wrapAll('<div class="l-3col--1"></div>'),
            e.slice(t, t + n).wrapAll('<div class="l-3col--2"></div>'),
            e.slice(t + n, e.length).wrapAll('<div class="l-3col--3"></div>')
    }

    function d() {
        $('.js-return-link.return-link__wrapper').hide(),
            $('.js-az-letter .js-enabled').show(),
            $('.js-az-letter .js-selected').removeClass('selected js-selected'),
            $('.js-az-content').empty()
    }

    function u(t) {
        jQuery('.' + i + '.js-az-letter').empty();
        for (var n = 0; n < t.length; n++) {
            var a = $('<a>', {
                id: i + 'js-' + ('#' === t[n].letter ? 'NUM' : t[n].letter),
                text: t[n].letter.toUpperCase()
            });
            if (a.on('click', r),
                t[n].status ? a.addClass('js-enabled') : a.addClass('js-disabled disabled'),
                e) {
                var s = e.indexOf('letter=');
                -1 !== s ? a.href = e.substr(0, s) + 'letter=' : -1 !== e.indexOf('?') ? a.href = e + '&letter=' : a.href = e + '?letter='
            } else
                a.href = '?letter=';
            a.href += t[n].letter,
                jQuery('.' + i + '.js-az-letter').append(a)
        }
    }

    function p(e) {
        e ? (jQuery('.' + i + '.js-az-content').hide(),
            jQuery('.' + i + '.js-loading-spinner').show()) : (jQuery('.' + i + '.js-az-content').show(),
            jQuery('.' + i + '.js-loading-spinner').hide())
    }

    a || (a = {}),
    i || (i = ''),
        a.type ? ($('.js-selection-panel-desktop').hide(),
            $('.selection-panel-mobile').hide()) : ($('.js-article-type-btn[data-label=\'All\']').addClass('selected'),
            $('.select-categories').val('All')),
        o();
    var f = $(window)
        , h = window.innerWidth;
    f.on('resize', function () {
        var e = window.innerWidth;
        h >= 900 && e < 900 ? jQuery('.js-az-letter a.selected').length && (jQuery('.js-az-letter').find('a').not('.selected').hide(),
            jQuery('.js-return-link').show(),
            jQuery('.js-panel-title').hide()) : h < 900 && e >= 900 && jQuery('.js-az-letter a.selected').length && (jQuery('.js-az-letter').find('a').not('.selected').show(),
            jQuery('.js-return-link').hide(),
            jQuery('.js-panel-title').show()),
            h = window.innerWidth
    }),
        $('.js-article-type-btn').click(function () {
            a.type = '';
            var e = $(this).attr('data-label').toLowerCase()
                , t = s[e];
            t && (a.type = t),
                $('.js-az-letter').empty(),
                $('.js-az-content').empty(),
                o()
        }),
        $('.select-categories').change(function () {
            a.type = '';
            var e = $(this).val().toLowerCase()
                , t = s[e];
            t && (a.type = t),
                $('.js-az-letter').empty(),
                $('.js-az-content').empty(),
                o()
        }),
        $('.return-link__link').click(function () {
            return d(),
                !1
        })
}
    ,
    $(document).ready(function () {
        !function (e) {
            function t(t) {
                var n = t.offset();
                e('body,html').animate({
                    scrollTop: n.top
                })
            }

            function n(n) {
                if (a <= 768) {
                    o.hide(),
                        o.removeClass('open');
                    var i = o.filter(n);
                    i.show(),
                        i.addClass('open'),
                        e('.js-accordion-section-title').removeClass('active'),
                        e(n).prev('.js-accordion-section-title').addClass('active'),
                    void 0 !== n && (window.onload = function () {
                            t(e(n).prev('.js-accordion-section-title'))
                        }
                    )
                }
            }

            var i = e(window)
                , a = i.width()
                , s = e('.js-accordion-section-title').map(function () {
                return this.hash
            }).get()
                , o = e(s.join(',')).each(function () {
                e(this).data('old-id', this.id)
            });
            -1 !== s.indexOf(window.location.hash) ? function () {
                var e = window.location.hash;
                -1 !== s.indexOf(e) ? n(e) : a <= 768 && n(s[0])
            }() : n(),
                e('.js-accordion-section-title').on('click', function (t) {
                    var n = e(this).attr('href');
                    e(t.target).is('.active') ? (e(this).removeClass('active'),
                        e(n).slideUp(300).removeClass('open')) : (e(this).addClass('active'),
                        e(n).slideDown(300).addClass('open'),
                    'function' == typeof showPlaylist && showPlaylist(n)),
                        t.preventDefault()
                });
            var r = e('.js-gallery-panel').closest('.js-accordion-content').attr('id');
            if ('function' == typeof mediaGallery && void 0 !== r) {
                var l = e('#' + r + ' .js-gallery-panel');
                l.length > 0 && mediaGallery(l.attr('id'))
            }
            e(document).ready(function () {
                e('.js-accordion-section-title.js-pre-open').each(function () {
                    e(this).addClass('active'),
                        e(e(this).attr('href')).show().addClass('open'),
                        e(this).hide()
                })
            }),
                i.on('resize', function () {
                    var t = i.width();
                    a <= 768 && t >= 768 && e('.js-accordion-content:hidden').css('display', ''),
                    t <= 768 && e('.js-accordion-content.open').css('display', 'block'),
                        a = i.width()
                }),
                e('.js-tabs-previous, .js-tabs-next').on('click', function () {
                    e(window).scrollTop() > e('.js-guide-content').offset().top - 25 && e('html, body').animate({
                        scrollTop: e('.js-guide-content').offset().top - 25
                    }, 0)
                })
        }(jQuery)
    }),
    function (e) {
        var t = e('.js-main-content h3').length
            , n = e('.js-ad--1')
            , i = e('.js-ad--2')
            , a = e('.js-ad--3')
            , s = null;
        if (t > 0)
            1 == t ? (s = e('.js-main-content h3').eq(0),
                e(s.next('p').after(n))) : t >= 1 && 2 != t && 3 != t && (s = e('.js-main-content h3').eq(1),
                s.prev('h2').length >= 1 ? e(s.prev('h2').before(n)) : (s = e('.js-main-content h3').eq(1),
                    e(s.before(n)))),
            2 != t && 3 != t || (s = e('.js-main-content h3').eq(1),
                e(s.prev('h2').length >= 1 ? s.prev('h2').before(n) : s.before(n))),
            t >= 4 && (s = e('.js-main-content h3').eq(3),
                e(s.prev('h2').length >= 1 ? s.prev('h2').before(i) : s.before(i))),
            t >= 6 && (s = e('.js-main-content h3').eq(5),
                e(s.prev('h2').length >= 1 ? s.prev('h2').before(a) : s.before(a)));
        else if (t > 0) {
            var o = e('.js-health-article__actions')
                , r = e('.js-main-content > p').eq(0)
                , l = e('.js-main-content > p').eq(1)
                , c = r.text().slice(-1);
            ':' !== c ? r.after(n) : ':' === c && 0 !== l.length ? l.before(n) : e(o).before(n)
        } else
            0 == t && e('.js-main-content').append(n);
        t < 6 && a.remove(),
        t < 4 && i.remove();
        var d = e('.main-content').height();
        if (d < '2000')
            e('.adv-2,.adv-3, .adv-4, .adv-5').hide();
        else if (d >= '2000' && d < '2800') {
            var u = (d - 1500) / 3;
            e('.ad-policy--desktop').css({
                'margin-bottom': u + 'px',
                position: 'sticky',
                top: '0'
            }),
                e('.adv-3, .adv-4, .adv-5').hide()
        } else if (d >= '2800' && d < '3400') {
            var u = (d - 2e3) / 4;
            e('.ad-policy--desktop').css({
                'margin-bottom': u + 'px',
                position: 'sticky',
                top: '0'
            }),
                e('.adv-4, .adv-5').hide()
        } else if (d >= '3400' && d < '4200') {
            var u = (d - 2500) / 5;
            e('.ad-policy--desktop').css({
                'margin-bottom': u + 'px',
                position: 'sticky',
                top: '0'
            }),
                e('.adv-5').hide()
        } else if (d >= '4200') {
            var u = (d - 2500) / 5;
            e('.ad-policy--desktop').css({
                'margin-bottom': u + 'px',
                position: 'sticky',
                top: '0'
            })
        }
    }(jQuery),
    $(document).ready(function () {
        !function (e) {
            function t() {
                r.classList.contains('open') ? document.ontouchmove = function (e) {
                        e.preventDefault()
                    }
                    : document.ontouchmove = function () {
                        return !0
                    }
            }

            function n() {
                r.classList.remove('visible')
            }

            function i() {
                r.classList.add('visible')
            }

            function a() {
                document.querySelector('.js-article-nav--fixed').classList.toggle('open'),
                    document.querySelector('.js-icon-toggle').classList.toggle('icon-kebab'),
                    document.querySelector('.js-icon-toggle').classList.toggle('icon-close'),
                    document.querySelector('body').classList.toggle('no-overflow')
            }

            var s = 0
                , o = document.querySelectorAll('.js-health-article__content h2')
                , r = document.querySelector('.js-article-nav-wrap');
            if (o.length) {
                var l = document.querySelector('.js-article-nav-header');
                l.addEventListener('click', function (e) {
                    e.preventDefault(),
                        r.classList.toggle('open'),
                        a(),
                        t()
                });
                var c, d = l.offsetHeight + 30;
                window.addEventListener('scroll', function () {
                    c = !0
                });
                var u = function () {
                    var t = Math.round(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop))
                        , a = document.querySelector('.js-health-article__content')
                        , o = a.offsetTop + 350
                        , r = document.documentElement.offsetHeight
                        , l = document.documentElement.clientHeight
                        , c = Array.from(document.querySelectorAll('.js-section'))
                        , u = c.find(function (e) {
                        return e.offsetTop + e.offsetHeight > t + d
                    });
                    if (u) {
                        var p = ['overview', 'additional-details', 'anatomy', 'care', 'care-and-treatment', 'conditions-and-disorders', 'diagnosis-and-tests', 'faq', 'function', 'living-with', 'management-and-treatment', 'outlook--prognosis', 'possible-causes', 'prevention', 'procedure-details', 'recovery-and-outlook', 'resources', 'results-and-follow-up', 'risks--benefits', 'symptoms-and-causes', 'test-details', 'when-to-call-the-doctor']
                            , f = u.classList[1].split('--');
                        f.shift(),
                            f = f.join('--'),
                            f = p.includes(f) ? f : 'overview',
                            e('.js-nav-icon').removeClass(p.map(function (e) {
                                return 'section-icon--' + e
                            }).join('  ')).addClass('section-icon--' + f)
                    }
                    t > o && t < r - l && (t > s ? n() : i()),
                    t < o && n(),
                    t > a.offsetHeight + a.offsetTop - 50 && n(),
                        s = t
                };
                setInterval(function () {
                    c && (u(),
                        c = !1)
                }, 500);
                document.querySelectorAll('.js-article-nav__link').forEach(function (e) {
                    e.addEventListener('click', function () {
                        r.classList.toggle('open'),
                            r.classList.toggle('visible'),
                            a(),
                            t();
                        var e = document.querySelector(this.hash)
                            , n = e.scrollTop;
                        s = n
                    })
                });
                var p = document.querySelector('.js-article-nav-header__title');
                p && function (e) {
                    var t = window.getComputedStyle(e)
                        , n = parseInt(t.getPropertyValue('height'))
                        , i = parseInt(t.getPropertyValue('line-height'));
                    return isNaN(i) && (i = 24),
                        Math.ceil(n / i)
                }(p) > 2 && p.classList.add('long')
            }
        }(jQuery)
    }),
    $(function () {
        var e = $('.js-back-to-top')
            , t = 0;
        $(window).on('scroll', function () {
            var n = $(this).scrollTop();
            n < t && n > 0 ? e.addClass('is-visible') : e.removeClass('is-visible'),
                t = n
        }),
            e.on('click', function (e) {
                e.preventDefault(),
                    $('body,html').animate({
                        scrollTop: 0
                    }, 700)
            })
    }),
    function (e) {
        var t = e('.js-bio--treatment-details__treatments').children();
        t.length > 10 ? (t.hide().slice(0, 10).show(),
            e('.js-bio--treatment-details__more-1').on('click', function () {
                t.show(),
                    e(this).remove()
            })) : e('.js-bio--treatment-details__more-1').remove();
        var n = e('.js-bio--treatment-details__specialty').children();
        n.length > 10 ? (n.hide().slice(0, 10).show(),
            e('.js-bio--treatment-details__more-2').on('click', function () {
                n.show(),
                    e(this).remove()
            })) : e('.js-bio--treatment-details__more-2').remove();
        var i = e('.js-bio--reviews__patient-comments').children();
        i.length > 5 ? (i.hide().slice(0, 5).show(),
            e('.js-bio--reviews__patient-comments__more').on('click', function () {
                i.show(),
                    e(this).remove()
            })) : e('.js-bio--reviews__patient-comments__more').remove()
    }(jQuery),
    function (e) {
        e(document).ready(function () {
            e('.js-clearable').each(function (t, n) {
                function i(e) {
                    e.value || e.val && e.val() ? (s.addClass('js-show-clear'),
                        s.attr('aria-hidden', 'false')) : (s.removeClass('js-show-clear'),
                        s.attr('aria-hidden', 'true'))
                }

                var a = e(this)
                    ,
                    s = e('<span role="button" aria-label="Clear Search Input">').addClass('js-clear-input').attr('aria-hidden', 'true').on('click', function () {
                        a.val(''),
                            s.removeClass('js-show-clear'),
                            s.attr('aria-hidden', 'true'),
                            a.trigger('input')
                    });
                a.val() && (a.addClass('js-show-clear'),
                    s.attr('aria-hidden', 'false')),
                    a.on('input', function () {
                        i(this)
                    }),
                    a.after(function () {
                        return s
                    }),
                    setTimeout(function () {
                        i(a)
                    }, 1)
            })
        })
    }(jQuery),
    function (e) {
        function t() {
            if (n && i) {
                var t = window.innerWidth;
                e('.cosmetic-plastic-surgery .teaser-panel .call-to-action__title').css('height', ''),
                    t >= 600 && t <= 900 ? e('.cosmetic-plastic-surgery .teaser-panel .panel-row').each(function () {
                        var t = []
                            , n = [];
                        e('> .l-4col--1 .call-to-action__title, > .l-4col--2 .call-to-action__title', this).each(function () {
                            t.push(e(this).outerHeight())
                        }),
                            e('> .l-4col--1 .call-to-action__title, > .l-4col--2 .call-to-action__title', this).css('height', Math.max.apply(null, t) + 'px'),
                            e('> .l-4col--3 .call-to-action__title, > .l-4col--4 .call-to-action__title', this).each(function () {
                                n.push(e(this).outerHeight())
                            }),
                            e('> .l-4col--3 .call-to-action__title, > .l-4col--4 .call-to-action__title', this).css('height', Math.max.apply(null, n) + 'px')
                    }) : t > 900 && e('.cosmetic-plastic-surgery .teaser-panel .panel-row').each(function () {
                        var t = [];
                        e('> div .call-to-action__title', this).each(function () {
                            t.push(e(this).outerHeight())
                        }),
                            e('> div .call-to-action__title', this).css('height', Math.max.apply(null, t) + 'px')
                    })
            }
        }

        var n = Boolean(e('.cosmetic-plastic-surgery')[0])
            , i = Boolean(e('.cosmetic-plastic-surgery .teaser-panel')[0]);
        !function () {
            if (n) {
                var e = document.createElement('link');
                e.rel = 'preconnect',
                    e.href = 'https://fonts.gstatic.com';
                var t = document.createElement('link');
                t.rel = 'stylesheet',
                    t.href = 'https://fonts.googleapis.com/css?family=Roboto:300i,400i',
                    document.getElementsByTagName('head')[0].appendChild(e),
                    document.getElementsByTagName('head')[0].appendChild(t)
            }
        }(),
            t(),
            window.addEventListener('resize', t),
            e('.js-accordion-section-title:not(.active)').on('click', t)
    }(jQuery),
    function (e) {
        e('.js-upload-input').each(function () {
            var t = e(this)
                , n = e(t).next('.js-upload-description');
            t.on('change', function () {
                const e = this.files[0];
                n.html(e.name)
            })
        })
    }(jQuery),
    function (e) {
        e(document).ready(function () {
            function t() {
                if (window.location.hash) {
                    var t = Math.ceil(i.offset().top + i.height());
                    e('html, body').animate({
                        scrollTop: t
                    }, 0)
                }
            }

            var n = e(window)
                , i = e('.guide-hero');
            i.length && (n.on('hashchange beforeunload', function () {
                t()
            }),
                t())
        })
    }(jQuery);
var Hogan = {};
!function (e) {
    function t(e, t, n) {
        var i;
        return t && 'object' == typeof t && (void 0 !== t[e] ? i = t[e] : n && t.get && 'function' == typeof t.get && (i = t.get(e))),
            i
    }

    function n(e, t, n, i, a, s) {
        function o() {
        }

        function r() {
        }

        o.prototype = e,
            r.prototype = e.subs;
        var l, c = new o;
        c.subs = new r,
            c.subsText = {},
            c.buf = '',
            i = i || {},
            c.stackSubs = i,
            c.subsText = s;
        for (l in t)
            i[l] || (i[l] = t[l]);
        for (l in i)
            c.subs[l] = i[l];
        a = a || {},
            c.stackPartials = a;
        for (l in n)
            a[l] || (a[l] = n[l]);
        for (l in a)
            c.partials[l] = a[l];
        return c
    }

    function i(e) {
        return String(null === e || void 0 === e ? '' : e)
    }

    function a(e) {
        return e = i(e),
            d.test(e) ? e.replace(s, '&amp;').replace(o, '&lt;').replace(r, '&gt;').replace(l, '&#39;').replace(c, '&quot;') : e
    }

    e.Template = function (e, t, n, i) {
        e = e || {},
            this.r = e.code || this.r,
            this.c = n,
            this.options = i || {},
            this.text = t || '',
            this.partials = e.partials || {},
            this.subs = e.subs || {},
            this.buf = ''
    }
        ,
        e.Template.prototype = {
            r: function () {
                return ''
            },
            v: a,
            t: i,
            render: function (e, t, n) {
                return this.ri([e], t || {}, n)
            },
            ri: function (e, t, n) {
                return this.r(e, t, n)
            },
            ep: function (e, t) {
                var i = this.partials[e]
                    , a = t[i.name];
                if (i.instance && i.base == a)
                    return i.instance;
                if ('string' == typeof a) {
                    if (!this.c)
                        throw new Error('No compiler available.');
                    a = this.c.compile(a, this.options)
                }
                if (!a)
                    return null;
                if (this.partials[e].base = a,
                    i.subs) {
                    t.stackText || (t.stackText = {});
                    for (key in i.subs)
                        t.stackText[key] || (t.stackText[key] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                    a = n(a, i.subs, i.partials, this.stackSubs, this.stackPartials, t.stackText)
                }
                return this.partials[e].instance = a,
                    a
            },
            rp: function (e, t, n, i) {
                var a = this.ep(e, n);
                return a ? a.ri(t, n, i) : ''
            },
            rs: function (e, t, n) {
                var i = e[e.length - 1];
                if (!u(i))
                    return void n(e, t, this);
                for (var a = 0; a < i.length; a++)
                    e.push(i[a]),
                        n(e, t, this),
                        e.pop()
            },
            s: function (e, t, n, i, a, s, o) {
                var r;
                return (!u(e) || 0 !== e.length) && ('function' == typeof e && (e = this.ms(e, t, n, i, a, s, o)),
                    r = !!e,
                !i && r && t && t.push('object' == typeof e ? e : t[t.length - 1]),
                    r)
            },
            d: function (e, n, i, a) {
                var s, o = e.split('.'), r = this.f(o[0], n, i, a), l = this.options.modelGet, c = null;
                if ('.' === e && u(n[n.length - 2]))
                    r = n[n.length - 1];
                else
                    for (var d = 1; d < o.length; d++)
                        s = t(o[d], r, l),
                            void 0 !== s ? (c = r,
                                r = s) : r = '';
                return !(a && !r) && (a || 'function' != typeof r || (n.push(c),
                    r = this.mv(r, n, i),
                    n.pop()),
                    r)
            },
            f: function (e, n, i, a) {
                for (var s = !1, o = null, r = !1, l = this.options.modelGet, c = n.length - 1; c >= 0; c--)
                    if (o = n[c],
                    void 0 !== (s = t(e, o, l))) {
                        r = !0;
                        break
                    }
                return r ? (a || 'function' != typeof s || (s = this.mv(s, n, i)),
                    s) : !a && ''
            },
            ls: function (e, t, n, a, s) {
                var o = this.options.delimiters;
                return this.options.delimiters = s,
                    this.b(this.ct(i(e.call(t, a)), t, n)),
                    this.options.delimiters = o,
                    !1
            },
            ct: function (e, t, n) {
                if (this.options.disableLambda)
                    throw new Error('Lambda features disabled.');
                return this.c.compile(e, this.options).render(t, n)
            },
            b: function (e) {
                this.buf += e
            },
            fl: function () {
                var e = this.buf;
                return this.buf = '',
                    e
            },
            ms: function (e, t, n, i, a, s, o) {
                var r, l = t[t.length - 1], c = e.call(l);
                return 'function' == typeof c ? !!i || (r = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text,
                    this.ls(c, l, n, r.substring(a, s), o)) : c
            },
            mv: function (e, t, n) {
                var a = t[t.length - 1]
                    , s = e.call(a);
                return 'function' == typeof s ? this.ct(i(s.call(a)), a, n) : s
            },
            sub: function (e, t, n, i) {
                var a = this.subs[e];
                a && (this.activeSub = e,
                    a(t, n, this, i),
                    this.activeSub = !1)
            }
        };
    var s = /&/g
        , o = /</g
        , r = />/g
        , l = /\'/g
        , c = /\"/g
        , d = /[&<>\"\']/
        , u = Array.isArray || function (e) {
        return '[object Array]' === Object.prototype.toString.call(e)
    }
}('undefined' != typeof exports ? exports : Hogan),
    function (e) {
        function t(e) {
            '}' === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
        }

        function n(e) {
            return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, '')
        }

        function i(e, t, n) {
            if (t.charAt(n) != e.charAt(0))
                return !1;
            for (var i = 1, a = e.length; a > i; i++)
                if (t.charAt(n + i) != e.charAt(i))
                    return !1;
            return !0
        }

        function a(t, n, i, r) {
            var l = []
                , c = null
                , d = null
                , u = null;
            for (d = i[i.length - 1]; t.length > 0;) {
                if (u = t.shift(),
                d && '<' == d.tag && !(u.tag in j))
                    throw new Error('Illegal content in < super tag.');
                if (e.tags[u.tag] <= e.tags.$ || s(u, r))
                    i.push(u),
                        u.nodes = a(t, u.tag, i, r);
                else {
                    if ('/' == u.tag) {
                        if (0 === i.length)
                            throw new Error('Closing tag without opener: /' + u.n);
                        if (c = i.pop(),
                        u.n != c.n && !o(u.n, c.n, r))
                            throw new Error('Nesting error: ' + c.n + ' vs. ' + u.n);
                        return c.end = u.i,
                            l
                    }
                    '\n' == u.tag && (u.last = 0 == t.length || '\n' == t[0].tag)
                }
                l.push(u)
            }
            if (i.length > 0)
                throw new Error('missing closing tag: ' + i.pop().n);
            return l
        }

        function s(e, t) {
            for (var n = 0, i = t.length; i > n; n++)
                if (t[n].o == e.n)
                    return e.tag = '#',
                        !0
        }

        function o(e, t, n) {
            for (var i = 0, a = n.length; a > i; i++)
                if (n[i].c == e && n[i].o == t)
                    return !0
        }

        function r(e) {
            var t = [];
            for (var n in e)
                t.push('"' + c(n) + '": function(c,p,t,i) {' + e[n] + '}');
            return '{ ' + t.join(',') + ' }'
        }

        function l(e) {
            var t = [];
            for (var n in e.partials)
                t.push('"' + c(n) + '":{name:"' + c(e.partials[n].name) + '", ' + l(e.partials[n]) + '}');
            return 'partials: {' + t.join(',') + '}, subs: ' + r(e.subs)
        }

        function c(e) {
            return e.replace(y, '\\\\').replace(m, '\\"').replace(g, '\\n').replace(v, '\\r').replace(w, '\\u2028').replace(b, '\\u2029')
        }

        function d(e) {
            return ~e.indexOf('.') ? 'd' : 'f'
        }

        function u(e, t) {
            var n = '<' + (t.prefix || '')
                , i = n + e.n + _++;
            return t.partials[i] = {
                name: e.n,
                partials: {}
            },
                t.code += 't.b(t.rp("' + c(i) + '",c,p,"' + (e.indent || '') + '"));',
                i
        }

        function p(e, t) {
            t.code += 't.b(t.t(t.' + d(e.n) + '("' + c(e.n) + '",c,p,0)));'
        }

        function f(e) {
            return 't.b(' + e + ');'
        }

        var h = /\S/
            , m = /\"/g
            , g = /\n/g
            , v = /\r/g
            , y = /\\/g
            , w = /\u2028/
            , b = /\u2029/;
        e.tags = {
            '#': 1,
            '^': 2,
            '<': 3,
            $: 4,
            '/': 5,
            '!': 6,
            '>': 7,
            '=': 8,
            _v: 9,
            '{': 10,
            '&': 11,
            _t: 12
        },
            e.scan = function (a, s) {
                function o() {
                    f.length > 0 && (m.push({
                        tag: '_t',
                        text: new String(f)
                    }),
                        f = '')
                }

                function r() {
                    for (var t = !0, n = y; n < m.length; n++)
                        if (!(t = e.tags[m[n].tag] < e.tags._v || '_t' == m[n].tag && null === m[n].text.match(h)))
                            return !1;
                    return t
                }

                function l(e, t) {
                    if (o(),
                    e && r())
                        for (var n, i = y; i < m.length; i++)
                            m[i].text && ((n = m[i + 1]) && '>' == n.tag && (n.indent = m[i].text.toString()),
                                m.splice(i, 1));
                    else
                        t || m.push({
                            tag: '\n'
                        });
                    g = !1,
                        y = m.length
                }

                var c = a.length
                    , d = 0
                    , u = null
                    , p = null
                    , f = ''
                    , m = []
                    , g = !1
                    , v = 0
                    , y = 0
                    , w = '{{'
                    , b = '}}';
                for (s && (s = s.split(' '),
                    w = s[0],
                    b = s[1]),
                         v = 0; c > v; v++)
                    0 == d ? i(w, a, v) ? (--v,
                        o(),
                        d = 1) : '\n' == a.charAt(v) ? l(g) : f += a.charAt(v) : 1 == d ? (v += w.length - 1,
                        p = e.tags[a.charAt(v + 1)],
                        u = p ? a.charAt(v + 1) : '_v',
                        '=' == u ? (v = function (e, t) {
                            var i = '=' + b
                                , a = e.indexOf(i, t)
                                , s = n(e.substring(e.indexOf('=', t) + 1, a)).split(' ');
                            return w = s[0],
                                b = s[s.length - 1],
                            a + i.length - 1
                        }(a, v),
                            d = 0) : (p && v++,
                            d = 2),
                        g = v) : i(b, a, v) ? (m.push({
                        tag: u,
                        n: n(f),
                        otag: w,
                        ctag: b,
                        i: '/' == u ? g - w.length : v + b.length
                    }),
                        f = '',
                        v += b.length - 1,
                        d = 0,
                    '{' == u && ('}}' == b ? v++ : t(m[m.length - 1]))) : f += a.charAt(v);
                return l(g, !0),
                    m
            }
        ;
        var j = {
            _t: !0,
            '\n': !0,
            $: !0,
            '/': !0
        };
        e.stringify = function (t) {
            return '{code: function (c,p,i) { ' + e.wrapMain(t.code) + ' },' + l(t) + '}'
        }
        ;
        var _ = 0;
        e.generate = function (t, n, i) {
            _ = 0;
            var a = {
                code: '',
                subs: {},
                partials: {}
            };
            return e.walk(t, a),
                i.asString ? this.stringify(a, n, i) : this.makeTemplate(a, n, i)
        }
            ,
            e.wrapMain = function (e) {
                return 'var t=this;t.b(i=i||"");' + e + 'return t.fl();'
            }
            ,
            e.template = e.Template,
            e.makeTemplate = function (e, t, n) {
                var i = this.makePartials(e);
                return i.code = new Function('c', 'p', 'i', this.wrapMain(e.code)),
                    new this.template(i, t, this, n)
            }
            ,
            e.makePartials = function (e) {
                var t, n = {
                    subs: {},
                    partials: e.partials,
                    name: e.name
                };
                for (t in n.partials)
                    n.partials[t] = this.makePartials(n.partials[t]);
                for (t in e.subs)
                    n.subs[t] = new Function('c', 'p', 't', 'i', e.subs[t]);
                return n
            }
            ,
            e.codegen = {
                '#': function (t, n) {
                    n.code += 'if(t.s(t.' + d(t.n) + '("' + c(t.n) + '",c,p,1),c,p,0,' + t.i + ',' + t.end + ',"' + t.otag + ' ' + t.ctag + '")){t.rs(c,p,function(c,p,t){',
                        e.walk(t.nodes, n),
                        n.code += '});c.pop();}'
                },
                '^': function (t, n) {
                    n.code += 'if(!t.s(t.' + d(t.n) + '("' + c(t.n) + '",c,p,1),c,p,1,0,0,"")){',
                        e.walk(t.nodes, n),
                        n.code += '};'
                },
                '>': u,
                '<': function (t, n) {
                    var i = {
                        partials: {},
                        code: '',
                        subs: {},
                        inPartial: !0
                    };
                    e.walk(t.nodes, i);
                    var a = n.partials[u(t, n)];
                    a.subs = i.subs,
                        a.partials = i.partials
                },
                $: function (t, n) {
                    var i = {
                        subs: {},
                        code: '',
                        partials: n.partials,
                        prefix: t.n
                    };
                    e.walk(t.nodes, i),
                        n.subs[t.n] = i.code,
                    n.inPartial || (n.code += 't.sub("' + c(t.n) + '",c,p,i);')
                },
                '\n': function (e, t) {
                    t.code += f('"\\n"' + (e.last ? '' : ' + i'))
                },
                _v: function (e, t) {
                    t.code += 't.b(t.v(t.' + d(e.n) + '("' + c(e.n) + '",c,p,0)));'
                },
                _t: function (e, t) {
                    t.code += f('"' + c(e.text) + '"')
                },
                '{': p,
                '&': p
            },
            e.walk = function (t, n) {
                for (var i, a = 0, s = t.length; s > a; a++)
                    (i = e.codegen[t[a].tag]) && i(t[a], n);
                return n
            }
            ,
            e.parse = function (e, t, n) {
                return n = n || {},
                    a(e, '', [], n.sectionTags || [])
            }
            ,
            e.cache = {},
            e.cacheKey = function (e, t) {
                return [e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet].join('||')
            }
            ,
            e.compile = function (t, n) {
                n = n || {};
                var i = e.cacheKey(t, n)
                    , a = this.cache[i];
                if (a) {
                    var s = a.partials;
                    for (var o in s)
                        delete s[o].instance;
                    return a
                }
                return a = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n),
                    this.cache[i] = a
            }
    }('undefined' != typeof exports ? exports : Hogan),
'undefined' != typeof module && module.exports && (module.exports = Hogan),
    function (e) {
        'function' == typeof define && define.amd ? define(['jquery'], e) : e('object' == typeof exports ? require('jquery') : window.jQuery || window.Zepto)
    }(function (e) {
        var t, n, i, a, s, o, r = 'Close', l = 'BeforeClose', c = 'MarkupParse', d = 'Open', u = 'Change', p = 'mfp',
            f = '.' + p, h = 'mfp-ready', m = 'mfp-removing', g = 'mfp-prevent-close', v = function () {
            }, y = !!window.jQuery, w = e(window), b = function (e, n) {
                t.ev.on(p + e + f, n)
            }, j = function (t, n, i, a) {
                var s = document.createElement('div');
                return s.className = 'mfp-' + t,
                i && (s.innerHTML = i),
                    a ? n && n.appendChild(s) : (s = e(s),
                    n && s.appendTo(n)),
                    s
            }, _ = function (n, i) {
                t.ev.triggerHandler(p + n, i),
                t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1),
                t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
            }, C = function (n) {
                return n === o && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace('%title%', t.st.tClose)),
                    o = n),
                    t.currTemplate.closeBtn
            }, x = function () {
                e.magnificPopup.instance || (t = new v,
                    t.init(),
                    e.magnificPopup.instance = t)
            }, k = function () {
                var e = document.createElement('p').style
                    , t = ['ms', 'O', 'Moz', 'Webkit'];
                if (void 0 !== e.transition)
                    return !0;
                for (; t.length;)
                    if (t.pop() + 'Transition' in e)
                        return !0;
                return !1
            };
        v.prototype = {
            constructor: v,
            init: function () {
                var n = navigator.appVersion;
                t.isLowIE = t.isIE8 = document.all && !document.addEventListener,
                    t.isAndroid = /android/gi.test(n),
                    t.isIOS = /iphone|ipad|ipod/gi.test(n),
                    t.supportsTransition = k(),
                    t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
                    i = e(document),
                    t.popupsCache = {}
            },
            open: function (n) {
                var a;
                if (!1 === n.isObj) {
                    t.items = n.items.toArray(),
                        t.index = 0;
                    var o, r = n.items;
                    for (a = 0; a < r.length; a++)
                        if (o = r[a],
                        o.parsed && (o = o.el[0]),
                        o === n.el[0]) {
                            t.index = a;
                            break
                        }
                } else
                    t.items = e.isArray(n.items) ? n.items : [n.items],
                        t.index = n.index || 0;
                if (t.isOpen)
                    return void t.updateItemHTML();
                t.types = [],
                    s = '',
                    n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i,
                    n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
                        t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {},
                    t.st = e.extend(!0, {}, e.magnificPopup.defaults, n),
                    t.fixedContentPos = 'auto' === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
                t.st.modal && (t.st.closeOnContentClick = !1,
                    t.st.closeOnBgClick = !1,
                    t.st.showCloseBtn = !1,
                    t.st.enableEscapeKey = !1),
                t.bgOverlay || (t.bgOverlay = j('bg').on('click' + f, function () {
                    t.close()
                }),
                    t.wrap = j('wrap').attr('tabindex', -1).on('click' + f, function (e) {
                        t._checkIfClose(e.target) && t.close()
                    }),
                    t.container = j('container', t.wrap)),
                    t.contentContainer = j('content'),
                t.st.preloader && (t.preloader = j('preloader', t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (a = 0; a < l.length; a++) {
                    var u = l[a];
                    u = u.charAt(0).toUpperCase() + u.slice(1),
                        t['init' + u].call(t)
                }
                _('BeforeOpen'),
                t.st.showCloseBtn && (t.st.closeBtnInside ? (b(c, function (e, t, n, i) {
                    n.close_replaceWith = C(i.type)
                }),
                    s += ' mfp-close-btn-in') : t.wrap.append(C())),
                t.st.alignTop && (s += ' mfp-align-top'),
                    t.fixedContentPos ? t.wrap.css({
                        overflow: t.st.overflowY,
                        overflowX: 'hidden',
                        overflowY: t.st.overflowY
                    }) : t.wrap.css({
                        top: w.scrollTop(),
                        position: 'absolute'
                    }),
                (!1 === t.st.fixedBgPos || 'auto' === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: i.height(),
                    position: 'absolute'
                }),
                t.st.enableEscapeKey && i.on('keyup' + f, function (e) {
                    27 === e.keyCode && t.close()
                }),
                    w.on('resize' + f, function () {
                        t.updateSize()
                    }),
                t.st.closeOnContentClick || (s += ' mfp-auto-cursor'),
                s && t.wrap.addClass(s);
                var p = t.wH = w.height()
                    , m = {};
                if (t.fixedContentPos && t._hasScrollBar(p)) {
                    var g = t._getScrollbarSize();
                    g && (m.marginRight = g)
                }
                t.fixedContentPos && (t.isIE7 ? e('body, html').css('overflow', 'hidden') : m.overflow = 'hidden');
                var v = t.st.mainClass;
                return t.isIE7 && (v += ' mfp-ie7'),
                v && t._addClassToMFP(v),
                    t.updateItemHTML(),
                    _('BuildControls'),
                    e('html').css(m),
                    t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
                    t._lastFocusedEl = document.activeElement,
                    setTimeout(function () {
                        t.content ? (t._addClassToMFP(h),
                            t._setFocus()) : t.bgOverlay.addClass(h),
                            i.on('focusin' + f, t._onFocusIn)
                    }, 16),
                    t.isOpen = !0,
                    t.updateSize(p),
                    _(d),
                    n
            },
            close: function () {
                t.isOpen && (_(l),
                    t.isOpen = !1,
                    t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(m),
                        setTimeout(function () {
                            t._close()
                        }, t.st.removalDelay)) : t._close())
            },
            _close: function () {
                _(r);
                var n = m + ' ' + h + ' ';
                if (t.bgOverlay.detach(),
                    t.wrap.detach(),
                    t.container.empty(),
                t.st.mainClass && (n += t.st.mainClass + ' '),
                    t._removeClassFromMFP(n),
                    t.fixedContentPos) {
                    var a = {
                        marginRight: ''
                    };
                    t.isIE7 ? e('body, html').css('overflow', '') : a.overflow = '',
                        e('html').css(a)
                }
                i.off('keyup.mfp focusin' + f),
                    t.ev.off(f),
                    t.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
                    t.bgOverlay.attr('class', 'mfp-bg'),
                    t.container.attr('class', 'mfp-container'),
                t.st.showCloseBtn && (!t.st.closeBtnInside || !0 === t.currTemplate[t.currItem.type]) && t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
                t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
                    t.currItem = null,
                    t.content = null,
                    t.currTemplate = null,
                    t.prevHeight = 0,
                    _('AfterClose')
            },
            updateSize: function (e) {
                if (t.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth
                        , i = window.innerHeight * n;
                    t.wrap.css('height', i),
                        t.wH = i
                } else
                    t.wH = e || w.height();
                t.fixedContentPos || t.wrap.css('height', t.wH),
                    _('Resize')
            },
            updateItemHTML: function () {
                var n = t.items[t.index];
                t.contentContainer.detach(),
                t.content && t.content.detach(),
                n.parsed || (n = t.parseEl(t.index));
                var i = n.type;
                if (_('BeforeChange', [t.currItem ? t.currItem.type : '', i]),
                    t.currItem = n,
                    !t.currTemplate[i]) {
                    var s = !!t.st[i] && t.st[i].markup;
                    _('FirstMarkupParse', s),
                        t.currTemplate[i] = !s || e(s)
                }
                a && a !== n.type && t.container.removeClass('mfp-' + a + '-holder');
                var o = t['get' + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
                t.appendContent(o, i),
                    n.preloaded = !0,
                    _(u, n),
                    a = n.type,
                    t.container.prepend(t.contentContainer),
                    _('AfterChange')
            },
            appendContent: function (e, n) {
                t.content = e,
                    e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find('.mfp-close').length || t.content.append(C()) : t.content = e : t.content = '',
                    _('BeforeAppend'),
                    t.container.addClass('mfp-' + n + '-holder'),
                    t.contentContainer.append(t.content)
            },
            parseEl: function (n) {
                var i, a = t.items[n];
                if (a.tagName ? a = {
                    el: e(a)
                } : (i = a.type,
                    a = {
                        data: a,
                        src: a.src
                    }),
                    a.el) {
                    for (var s = t.types, o = 0; o < s.length; o++)
                        if (a.el.hasClass('mfp-' + s[o])) {
                            i = s[o];
                            break
                        }
                    a.src = a.el.attr('data-mfp-src'),
                    a.src || (a.src = a.el.attr('href'))
                }
                return a.type = i || t.st.type || 'inline',
                    a.index = n,
                    a.parsed = !0,
                    t.items[n] = a,
                    _('ElementParse', a),
                    t.items[n]
            },
            addGroup: function (e, n) {
                var i = function (i) {
                    i.mfpEl = this,
                        t._openClick(i, e, n)
                };
                n || (n = {});
                var a = 'click.magnificPopup';
                n.mainEl = e,
                    n.items ? (n.isObj = !0,
                        e.off(a).on(a, i)) : (n.isObj = !1,
                        n.delegate ? e.off(a).on(a, n.delegate, i) : (n.items = e,
                            e.off(a).on(a, i)))
            },
            _openClick: function (n, i, a) {
                if ((void 0 !== a.midClick ? a.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                    var s = void 0 !== a.disableOn ? a.disableOn : e.magnificPopup.defaults.disableOn;
                    if (s)
                        if (e.isFunction(s)) {
                            if (!s.call(t))
                                return !0
                        } else if (w.width() < s)
                            return !0;
                    n.type && (n.preventDefault(),
                    t.isOpen && n.stopPropagation()),
                        a.el = e(n.mfpEl),
                    a.delegate && (a.items = i.find(a.delegate)),
                        t.open(a)
                }
            },
            updateStatus: function (e, i) {
                if (t.preloader) {
                    n !== e && t.container.removeClass('mfp-s-' + n),
                    !i && 'loading' === e && (i = t.st.tLoading);
                    var a = {
                        status: e,
                        text: i
                    };
                    _('UpdateStatus', a),
                        e = a.status,
                        i = a.text,
                        t.preloader.html(i),
                        t.preloader.find('a').on('click', function (e) {
                            e.stopImmediatePropagation()
                        }),
                        t.container.addClass('mfp-s-' + e),
                        n = e
                }
            },
            _checkIfClose: function (n) {
                if (!e(n).hasClass(g)) {
                    var i = t.st.closeOnContentClick
                        , a = t.st.closeOnBgClick;
                    if (i && a)
                        return !0;
                    if (!t.content || e(n).hasClass('mfp-close') || t.preloader && n === t.preloader[0])
                        return !0;
                    if (n === t.content[0] || e.contains(t.content[0], n)) {
                        if (i)
                            return !0
                    } else if (a && e.contains(document, n))
                        return !0;
                    return !1
                }
            },
            _addClassToMFP: function (e) {
                t.bgOverlay.addClass(e),
                    t.wrap.addClass(e)
            },
            _removeClassFromMFP: function (e) {
                this.bgOverlay.removeClass(e),
                    t.wrap.removeClass(e)
            },
            _hasScrollBar: function (e) {
                return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || w.height())
            },
            _setFocus: function () {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function (n) {
                if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target))
                    return t._setFocus(),
                        !1
            },
            _parseMarkup: function (t, n, i) {
                var a;
                i.data && (n = e.extend(i.data, n)),
                    _(c, [t, n, i]),
                    e.each(n, function (n, i) {
                        if (void 0 === i || !1 === i)
                            return !0;
                        if (a = n.split('_'),
                        a.length > 1) {
                            var s = t.find(f + '-' + a[0]);
                            if (s.length > 0) {
                                var o = a[1];
                                'replaceWith' === o ? s[0] !== i[0] && s.replaceWith(i) : 'img' === o ? s.is('img') ? s.attr('src', i) : s.replaceWith(e('<img>').attr('src', i).attr('class', s.attr('class'))) : s.attr(a[1], i)
                            }
                        } else
                            t.find(f + '-' + n).html(i)
                    })
            },
            _getScrollbarSize: function () {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement('div');
                    e.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;',
                        document.body.appendChild(e),
                        t.scrollbarSize = e.offsetWidth - e.clientWidth,
                        document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        },
            e.magnificPopup = {
                instance: null,
                proto: v.prototype,
                modules: [],
                open: function (t, n) {
                    return x(),
                        t = t ? e.extend(!0, {}, t) : {},
                        t.isObj = !0,
                        t.index = n || 0,
                        this.instance.open(t)
                },
                close: function () {
                    return e.magnificPopup.instance && e.magnificPopup.instance.close()
                },
                registerModule: function (t, n) {
                    n.options && (e.magnificPopup.defaults[t] = n.options),
                        e.extend(this.proto, n.proto),
                        this.modules.push(t)
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: '',
                    preloader: !0,
                    focus: '',
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: 'auto',
                    fixedBgPos: 'auto',
                    overflowY: 'auto',
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: 'Close (Esc)',
                    tLoading: 'Loading...',
                    autoFocusLast: !0
                }
            },
            e.fn.magnificPopup = function (n) {
                x();
                var i = e(this);
                if ('string' == typeof n)
                    if ('open' === n) {
                        var a, s = y ? i.data('magnificPopup') : i[0].magnificPopup,
                            o = parseInt(arguments[1], 10) || 0;
                        s.items ? a = s.items[o] : (a = i,
                        s.delegate && (a = a.find(s.delegate)),
                            a = a.eq(o)),
                            t._openClick({
                                mfpEl: a
                            }, i, s)
                    } else
                        t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
                else
                    n = e.extend(!0, {}, n),
                        y ? i.data('magnificPopup', n) : i[0].magnificPopup = n,
                        t.addGroup(i, n);
                return i
            }
        ;
        var T, S, I, $ = 'inline', E = function () {
            I && (S.after(I.addClass(T)).detach(),
                I = null)
        };
        e.magnificPopup.registerModule($, {
            options: {
                hiddenClass: 'hide',
                markup: '',
                tNotFound: 'Content not found'
            },
            proto: {
                initInline: function () {
                    t.types.push($),
                        b(r + '.' + $, function () {
                            E()
                        })
                },
                getInline: function (n, i) {
                    if (E(),
                        n.src) {
                        var a = t.st.inline
                            , s = e(n.src);
                        if (s.length) {
                            var o = s[0].parentNode;
                            o && o.tagName && (S || (T = a.hiddenClass,
                                S = j(T),
                                T = 'mfp-' + T),
                                I = s.after(S).detach().removeClass(T)),
                                t.updateStatus('ready')
                        } else
                            t.updateStatus('error', a.tNotFound),
                                s = e('<div>');
                        return n.inlineElement = s,
                            s
                    }
                    return t.updateStatus('ready'),
                        t._parseMarkup(i, {}, n),
                        i
                }
            }
        });
        var P, L = 'ajax', z = function () {
            P && e(document.body).removeClass(P)
        }, O = function () {
            z(),
            t.req && t.req.abort()
        };
        e.magnificPopup.registerModule(L, {
            options: {
                settings: null,
                cursor: 'mfp-ajax-cur',
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function () {
                    t.types.push(L),
                        P = t.st.ajax.cursor,
                        b(r + '.' + L, O),
                        b('BeforeChange.' + L, O)
                },
                getAjax: function (n) {
                    P && e(document.body).addClass(P),
                        t.updateStatus('loading');
                    var i = e.extend({
                        url: n.src,
                        success: function (i, a, s) {
                            var o = {
                                data: i,
                                xhr: s
                            };
                            _('ParseAjax', o),
                                t.appendContent(e(o.data), L),
                                n.finished = !0,
                                z(),
                                t._setFocus(),
                                setTimeout(function () {
                                    t.wrap.addClass(h)
                                }, 16),
                                t.updateStatus('ready'),
                                _('AjaxContentAdded')
                        },
                        error: function () {
                            z(),
                                n.finished = n.loadError = !0,
                                t.updateStatus('error', t.st.ajax.tError.replace('%url%', n.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(i),
                        ''
                }
            }
        });
        var M, H = function (n) {
            if (n.data && void 0 !== n.data.title)
                return n.data.title;
            var i = t.st.image.titleSrc;
            if (i) {
                if (e.isFunction(i))
                    return i.call(t, n);
                if (n.el)
                    return n.el.attr(i) || ''
            }
            return ''
        };
        e.magnificPopup.registerModule('image', {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: 'mfp-zoom-out-cur',
                titleSrc: 'title',
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function () {
                    var n = t.st.image
                        , i = '.image';
                    t.types.push('image'),
                        b(d + i, function () {
                            'image' === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                        }),
                        b(r + i, function () {
                            n.cursor && e(document.body).removeClass(n.cursor),
                                w.off('resize' + f)
                        }),
                        b('Resize' + i, t.resizeImage),
                    t.isLowIE && b('AfterChange', t.resizeImage)
                },
                resizeImage: function () {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var n = 0;
                        t.isLowIE && (n = parseInt(e.img.css('padding-top'), 10) + parseInt(e.img.css('padding-bottom'), 10)),
                            e.img.css('max-height', t.wH - n)
                    }
                },
                _onImageHasSize: function (e) {
                    e.img && (e.hasSize = !0,
                    M && clearInterval(M),
                        e.isCheckingImgSize = !1,
                        _('ImageHasSize', e),
                    e.imgHidden && (t.content && t.content.removeClass('mfp-loading'),
                        e.imgHidden = !1))
                },
                findImageSize: function (e) {
                    var n = 0
                        , i = e.img[0]
                        , a = function (s) {
                        M && clearInterval(M),
                            M = setInterval(function () {
                                if (i.naturalWidth > 0)
                                    return void t._onImageHasSize(e);
                                n > 200 && clearInterval(M),
                                    n++,
                                    3 === n ? a(10) : 40 === n ? a(50) : 100 === n && a(500)
                            }, s)
                    };
                    a(1)
                },
                getImage: function (n, i) {
                    var a = 0
                        , s = function () {
                        n && (n.img[0].complete ? (n.img.off('.mfploader'),
                        n === t.currItem && (t._onImageHasSize(n),
                            t.updateStatus('ready')),
                            n.hasSize = !0,
                            n.loaded = !0,
                            _('ImageLoadComplete')) : (a++,
                            a < 200 ? setTimeout(s, 100) : o()))
                    }
                        , o = function () {
                        n && (n.img.off('.mfploader'),
                        n === t.currItem && (t._onImageHasSize(n),
                            t.updateStatus('error', r.tError.replace('%url%', n.src))),
                            n.hasSize = !0,
                            n.loaded = !0,
                            n.loadError = !0)
                    }
                        , r = t.st.image
                        , l = i.find('.mfp-img');
                    if (l.length) {
                        var c = document.createElement('img');
                        c.className = 'mfp-img',
                        n.el && n.el.find('img').length && (c.alt = n.el.find('img').attr('alt')),
                            n.img = e(c).on('load.mfploader', s).on('error.mfploader', o),
                            c.src = n.src,
                        l.is('img') && (n.img = n.img.clone()),
                            c = n.img[0],
                            c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                    }
                    return t._parseMarkup(i, {
                        title: H(n),
                        img_replaceWith: n.img
                    }, n),
                        t.resizeImage(),
                        n.hasSize ? (M && clearInterval(M),
                            n.loadError ? (i.addClass('mfp-loading'),
                                t.updateStatus('error', r.tError.replace('%url%', n.src))) : (i.removeClass('mfp-loading'),
                                t.updateStatus('ready')),
                            i) : (t.updateStatus('loading'),
                            n.loading = !0,
                        n.hasSize || (n.imgHidden = !0,
                            i.addClass('mfp-loading'),
                            t.findImageSize(n)),
                            i)
                }
            }
        });
        var Q, A = function () {
            return void 0 === Q && (Q = void 0 !== document.createElement('p').style.MozTransform),
                Q
        };
        e.magnificPopup.registerModule('zoom', {
            options: {
                enabled: !1,
                easing: 'ease-in-out',
                duration: 300,
                opener: function (e) {
                    return e.is('img') ? e : e.find('img')
                }
            },
            proto: {
                initZoom: function () {
                    var e, n = t.st.zoom, i = '.zoom';
                    if (n.enabled && t.supportsTransition) {
                        var a, s, o = n.duration, c = function (e) {
                            var t = e.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image')
                                , i = 'all ' + n.duration / 1e3 + 's ' + n.easing
                                , a = {
                                position: 'fixed',
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                '-webkit-backface-visibility': 'hidden'
                            }
                                , s = 'transition';
                            return a['-webkit-' + s] = a['-moz-' + s] = a['-o-' + s] = a[s] = i,
                                t.css(a),
                                t
                        }, d = function () {
                            t.content.css('visibility', 'visible')
                        };
                        b('BuildControls' + i, function () {
                            if (t._allowZoom()) {
                                if (clearTimeout(a),
                                    t.content.css('visibility', 'hidden'),
                                    e = t._getItemToZoom(),
                                    !e)
                                    return void d();
                                s = c(e),
                                    s.css(t._getOffset()),
                                    t.wrap.append(s),
                                    a = setTimeout(function () {
                                        s.css(t._getOffset(!0)),
                                            a = setTimeout(function () {
                                                d(),
                                                    setTimeout(function () {
                                                        s.remove(),
                                                            e = s = null,
                                                            _('ZoomAnimationEnded')
                                                    }, 16)
                                            }, o)
                                    }, 16)
                            }
                        }),
                            b(l + i, function () {
                                if (t._allowZoom()) {
                                    if (clearTimeout(a),
                                        t.st.removalDelay = o,
                                        !e) {
                                        if (!(e = t._getItemToZoom()))
                                            return;
                                        s = c(e)
                                    }
                                    s.css(t._getOffset(!0)),
                                        t.wrap.append(s),
                                        t.content.css('visibility', 'hidden'),
                                        setTimeout(function () {
                                            s.css(t._getOffset())
                                        }, 16)
                                }
                            }),
                            b(r + i, function () {
                                t._allowZoom() && (d(),
                                s && s.remove(),
                                    e = null)
                            })
                    }
                },
                _allowZoom: function () {
                    return 'image' === t.currItem.type
                },
                _getItemToZoom: function () {
                    return !!t.currItem.hasSize && t.currItem.img
                },
                _getOffset: function (n) {
                    var i;
                    i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                    var a = i.offset()
                        , s = parseInt(i.css('padding-top'), 10)
                        , o = parseInt(i.css('padding-bottom'), 10);
                    a.top -= e(window).scrollTop() - s;
                    var r = {
                        width: i.width(),
                        height: (y ? i.innerHeight() : i[0].offsetHeight) - o - s
                    };
                    return A() ? r['-moz-transform'] = r.transform = 'translate(' + a.left + 'px,' + a.top + 'px)' : (r.left = a.left,
                        r.top = a.top),
                        r
                }
            }
        });
        var W = 'iframe'
            , B = function (e) {
            if (t.currTemplate[W]) {
                var n = t.currTemplate[W].find('iframe');
                n.length && (e || (n[0].src = '//about:blank'),
                t.isIE8 && n.css('display', e ? 'block' : 'none'))
            }
        };
        e.magnificPopup.registerModule(W, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: 'iframe_src',
                patterns: {
                    youtube: {
                        index: 'youtube.com',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                }
            },
            proto: {
                initIframe: function () {
                    t.types.push(W),
                        b('BeforeChange', function (e, t, n) {
                            t !== n && (t === W ? B() : n === W && B(!0))
                        }),
                        b(r + '.' + W, function () {
                            B()
                        })
                },
                getIframe: function (n, i) {
                    var a = n.src
                        , s = t.st.iframe;
                    e.each(s.patterns, function () {
                        if (a.indexOf(this.index) > -1)
                            return this.id && (a = 'string' == typeof this.id ? a.substr(a.lastIndexOf(this.id) + this.id.length, a.length) : this.id.call(this, a)),
                                a = this.src.replace('%id%', a),
                                !1
                    });
                    var o = {};
                    return s.srcAction && (o[s.srcAction] = a),
                        t._parseMarkup(i, o, n),
                        t.updateStatus('ready'),
                        i
                }
            }
        });
        var q = function (e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : e < 0 ? n + e : e
        }
            , F = function (e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
        e.magnificPopup.registerModule('gallery', {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: 'Previous (Left arrow key)',
                tNext: 'Next (Right arrow key)',
                tCounter: '%curr% of %total%'
            },
            proto: {
                initGallery: function () {
                    var n = t.st.gallery
                        , a = '.mfp-gallery';
                    if (t.direction = !0,
                    !n || !n.enabled)
                        return !1;
                    s += ' mfp-gallery',
                        b(d + a, function () {
                            n.navigateByImgClick && t.wrap.on('click' + a, '.mfp-img', function () {
                                if (t.items.length > 1)
                                    return t.next(),
                                        !1
                            }),
                                i.on('keydown' + a, function (e) {
                                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                                })
                        }),
                        b('UpdateStatus' + a, function (e, n) {
                            n.text && (n.text = F(n.text, t.currItem.index, t.items.length))
                        }),
                        b(c + a, function (e, i, a, s) {
                            var o = t.items.length;
                            a.counter = o > 1 ? F(n.tCounter, s.index, o) : ''
                        }),
                        b('BuildControls' + a, function () {
                            if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                                var i = n.arrowMarkup
                                    ,
                                    a = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, 'left')).addClass(g)
                                    ,
                                    s = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, 'right')).addClass(g);
                                a.click(function () {
                                    t.prev()
                                }),
                                    s.click(function () {
                                        t.next()
                                    }),
                                    t.container.append(a.add(s))
                            }
                        }),
                        b(u + a, function () {
                            t._preloadTimeout && clearTimeout(t._preloadTimeout),
                                t._preloadTimeout = setTimeout(function () {
                                    t.preloadNearbyImages(),
                                        t._preloadTimeout = null
                                }, 16)
                        }),
                        b(r + a, function () {
                            i.off(a),
                                t.wrap.off('click' + a),
                                t.arrowRight = t.arrowLeft = null
                        })
                },
                next: function () {
                    t.direction = !0,
                        t.index = q(t.index + 1),
                        t.updateItemHTML()
                },
                prev: function () {
                    t.direction = !1,
                        t.index = q(t.index - 1),
                        t.updateItemHTML()
                },
                goTo: function (e) {
                    t.direction = e >= t.index,
                        t.index = e,
                        t.updateItemHTML()
                },
                preloadNearbyImages: function () {
                    var e, n = t.st.gallery.preload, i = Math.min(n[0], t.items.length),
                        a = Math.min(n[1], t.items.length);
                    for (e = 1; e <= (t.direction ? a : i); e++)
                        t._preloadItem(t.index + e);
                    for (e = 1; e <= (t.direction ? i : a); e++)
                        t._preloadItem(t.index - e)
                },
                _preloadItem: function (n) {
                    if (n = q(n),
                        !t.items[n].preloaded) {
                        var i = t.items[n];
                        i.parsed || (i = t.parseEl(n)),
                            _('LazyLoad', i),
                        'image' === i.type && (i.img = e('<img class="mfp-img" />').on('load.mfploader', function () {
                            i.hasSize = !0
                        }).on('error.mfploader', function () {
                            i.hasSize = !0,
                                i.loadError = !0,
                                _('LazyLoadError', i)
                        }).attr('src', i.src)),
                            i.preloaded = !0
                    }
                }
            }
        });
        var D = 'retina';
        e.magnificPopup.registerModule(D, {
            options: {
                replaceSrc: function (e) {
                    return e.src.replace(/\.\w+$/, function (e) {
                        return '@2x' + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina
                            , n = e.ratio;
                        (n = isNaN(n) ? n() : n) > 1 && (b('ImageHasSize.' + D, function (e, t) {
                            t.img.css({
                                'max-width': t.img[0].naturalWidth / n,
                                width: '100%'
                            })
                        }),
                            b('ElementParse.' + D, function (t, i) {
                                i.src = e.replaceSrc(i, n)
                            }))
                    }
                }
            }
        }),
            x()
    }),
    $(document).ready(function () {
        $('.js-language-select').on('click', function () {
            $('.js-language-select').hasClass('active-drop-down') ? $('.js-language-select').removeClass('active-drop-down') : $('.js-language-select').addClass('active-drop-down')
        }),
            $(document).on('mouseup', function (e) {
                var t = $('.js-language-select');
                t.is(e.target) || 0 !== t.has(e.target).length || $('.js-language-select').removeClass('active-drop-down')
            })
    }),
    document.addEventListener('DOMContentLoaded', function () {
        function e() {
            i && clearTimeout(i),
                i = setTimeout(function () {
                    var n = window.pageYOffset;
                    Array.prototype.slice.call(t).forEach(function (e) {
                        e.offsetTop < window.innerHeight + n && (e.src = e.dataset.src,
                            e.classList.remove('js-lazy'))
                    }),
                    0 == t.length && (document.removeEventListener('scroll', e),
                        window.removeEventListener('resize', e),
                        window.removeEventListener('orientationChange', e))
                }, 20)
        }

        var t;
        if ('IntersectionObserver' in window) {
            t = document.querySelectorAll('.js-lazy');
            var n = new IntersectionObserver(function (e, t) {
                    e.forEach(function (e) {
                        if (e.isIntersecting) {
                            var t = e.target;
                            t.src = t.dataset.src,
                                t.classList.remove('js-lazy'),
                                n.unobserve(t)
                        }
                    })
                }
            );
            t.forEach(function (e) {
                n.observe(e)
            })
        } else {
            var i;
            t = document.querySelectorAll('.js-lazy'),
                document.addEventListener('scroll', e),
                window.addEventListener('resize', e),
                window.addEventListener('orientationChange', e)
        }
    }),
    function (e) {
        jQuery(document).ready(function () {
            e('.js-teaser-list__load-more').each(function (t) {
                e('.js-teaser__item:gt(3)', this).hide()
            }),
                e(document).on('click', '.js-load-more', function (t) {
                    var n = e(this).parent().siblings('.js-teaser-list__load-more').find('.js-teaser__item:gt(3)');
                    n.slideDown('slow'),
                        e(this).removeClass('button--arrow-down').addClass('button--arrow-up'),
                        'Show Less' == e(this).text() ? (n.slideUp('slow'),
                            e(this).text('Show More'),
                            e(this).removeClass('button--arrow-up').addClass('button--arrow-down')) : e(this).text('Show Less'),
                        t.preventDefault()
                })
        })
    }(jQuery),
    function (e) {
        e('.js-hamburger-text').on('click', function (t) {
            e(this).find('.js-hamburger-section').toggleClass('open'),
                t.preventDefault()
        }),
            e('.js-nav-toggle--secondary').on('click', function (t) {
                e(this).find('.js-hamburger-secondary').toggleClass('open'),
                    e(this).siblings('.js-nav--secondary').toggleClass('open'),
                    t.preventDefault()
            })
    }(jQuery),
    function (e) {
        function t() {
            return a.toggleClass('open'),
                i.toggleClass('open'),
                n.toggleClass('open'),
                o.toggleClass('open'),
                !1
        }

        var n = e('.js-nav--primary__wrapper')
            , i = e('.js-underlay')
            , a = e('.js-nav--primary__menu_toggle')
            , s = e('.js-nav--secondary__dropdown-toggle')
            , o = e('.js-hamburger-primary')
            , r = e('.js-active');
        !function () {
            i.removeClass('open'),
                n.removeClass('open'),
                o.removeClass('open')
        }(),
            a.on('click', t),
            i.on('click', t),
            s.on('click', function (t) {
                return e(this).toggleClass('open'),
                    e(this).next().toggleClass('open'),
                    e(this).find('.js-icon-toggle').toggleClass('icon-arrow-up icon-arrow-down'),
                    !1
            }),
            r.on('click', function (e) {
                e.preventDefault()
            })
    }(jQuery),
    function () {
        var e = document.querySelector('.js-notification-banner')
            , t = document.querySelector('.js-notification-banner__action-icon--minimize')
            , n = document.querySelector('.js-notification-banner__action-icon--maximize')
            , i = document.querySelector('.js-notification-banner__action-icon--close')
            , a = document.querySelector('.js-notification-banner__main');
        i && i.addEventListener('click', function (t) {
            e.classList.add('hide'),
                document.cookie = notificationBannerCookieName + "=maximized; path=/; SameSite=Lax; max-age=86400"
        }),
        t && t.addEventListener('click', function (e) {
            a.classList.add('hide'),
                this.classList.add('hide'),
                n.classList.remove('hide'),
                document.cookie = notificationBannerCookieName + "=minimized; path=/; SameSite=Lax; max-age=86400"
        }),
        n && n.addEventListener('click', function (e) {
            a.classList.remove('hide'),
                this.classList.add('hide'),
                t.classList.remove('hide'),
                document.cookie = notificationBannerCookieName + "=maximized; path=/; SameSite=Lax; max-age=86400"
        })
    }(),
    jQuery(document).ready(function () {
        jQuery(document).on('click', '.js-open-scheduling', function (e) {
            window.open(jQuery(this).attr('data-full-url'), '', 'width=780,height=620'),
                e.preventDefault()
        })
    }),
    $(function () {
        function e() {
            function e() {
                var e = window
                    , t = 'inner';
                return 'innerWidth' in window || (t = 'client',
                    e = document.documentElement || document.body),
                    e[t + 'Width']
            }

            $('.panel-row').each(function () {
                var t = $(this).find('.js-panel');
                t.removeAttr('style');
                var n = 0;
                t.each(function () {
                    $(this).height() > n && (n = $(this).height())
                }),
                    e() >= 900 ? t.css('height', n) : t.removeAttr('style'),
                $(this).prev('.panel-row') && $(this).prev('.panel-row').find('.js-panel:last-child').addClass('multi-row')
            })
        }

        e(),
            $(window).on('resize', function () {
                e()
            })
    }),
    function (e) {
        e(document).ready(function () {
            e('.js-video-popup').magnificPopup({
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1,
                type: 'iframe'
            })
        })
    }(jQuery),
    function (e) {
        e(document).ready(function () {
            function t() {
                e('.js-data-table--scroll').each(function () {
                    function t() {
                        for (var e = [], t = 0; t < r.length; t++)
                            h[t] < r[1] && m[t + 1] <= r[1] ? e.push(t + 1) : h[t] >= s && m[t + 1] > s ? e.push(t + 1) : h[t] < r[1] && m[t + 1] > r[r.length - 1] ? e.push(t + 1) : h[t] < r[1] || m[t + 1] > r[r.length - 1] ? w.push(t + 1) : h[t] > r[1] && m[t + 1] < r[r.length - 1] && w.push(t + 1);
                        return w
                    }

                    var n = parseFloat(e(this).css('width'))
                        , i = e(this).parent()
                        , a = i.parent()
                        , s = parseFloat(i.css('width'));
                    parseFloat(i.css('height'));
                    if (n > s) {
                        e(this).parent().siblings('.js-table-scroll__navigation').remove(),
                            e(this).siblings('.js-table-scroll__shadow').remove(),
                            i.addClass('has-scrollbar').append('<div class="table-scroll__shadow js-table-scroll__shadow"></div>'),
                            e(this).find('.js-data-table--scroll__row').each(function () {
                                var t = parseFloat(e(this).css('height'))
                                    , n = e(this).find('.js-data-table--scroll__column').eq(0);
                                if (0 === e(this).find('.spacer-col').length) {
                                    var i = n.get(0).outerHTML;
                                    n.after(i),
                                        n.next().addClass('spacer-col'),
                                        n.addClass('fixed-col')
                                }
                                n.css('height', t)
                            }),
                            a.prepend('<nav aria-hidden="true" class="table-scroll__navigation js-table-scroll__navigation"><ul class="table-scroll__navigation-pips js-table-scroll__navigation-pips"></ul><ul class="table-scroll__pagination js-table-scroll__pagination"><li class="pagination__item" href="#"><button class="button--transparent button--small pagination__prev" type="button"></button></li><li class="pagination__item" href="#"><button class="button--transparent button--small pagination__next" type="button"></button></li></ul></nav>');
                        var o = 0
                            , r = []
                            , l = []
                            , c = 0;
                        e(this).find('tbody .js-data-table--scroll__row:nth-child(1) td').each(function () {
                            e(this).hasClass('spacer-col') || (o++,
                                r.push(this.offsetLeft),
                                l.push(parseInt(e(this).css('width'))),
                                c = parseInt(e(this).css('width')))
                        }),
                            r.push(c + r[r.length - 1]);
                        for (var d = e(this).parent().siblings().find('ul.js-table-scroll__navigation-pips'), u = 0; u < r.length - 1; u++)
                            d.append('<li class="table-scroll__navigation-pip js-table-scroll__navigation-pip">&#9679;</li>');
                        var p = parseFloat(e('.js-table-scroll__navigation').css('height'));
                        e(this).siblings('.js-table-scroll__shadow').css('top', p),
                            r,
                            r.slice(0).reverse();
                        for (var f = 0; f < r.length - 1; f++)
                            d.children(':nth-child(' + f + ')').removeClass('off-screen');
                        for (var h = r.slice(0), m = r.slice(0), f = 0; f < r.length; f++) {
                            var g = f + 1;
                            d.children(':nth-child(' + g + ')').removeClass('off-screen'),
                            0 != f && (h[f] < r[1] && m[f + 1] <= r[1] ? d.children(':nth-child(' + g + ')').addClass('off-screen') : h[f] >= s && m[f + 1] > s ? d.children(':nth-child(' + g + ')').addClass('off-screen') : h[f] < r[1] && m[f + 1] > r[r.length - 1] ? d.children(':nth-child(' + g + ')').addClass('off-screen') : h[f] < r[1] && r[1] - h[f] > l[f] / 2 || m[f + 1] > s && m[f + 1] - s > l[f] / 2 ? d.children(':nth-child(' + g + ')').addClass('off-screen') : h[f] > r[1] && m[f + 1] < r[r.length - 1] && d.children(':nth-child(' + g + ')').removeClass('off-screen'))
                        }
                        var v = e(this).parent().siblings().find('.pagination__prev')
                            , y = e(this).parent().siblings().find('.pagination__next')
                            , w = []
                            , b = i.scrollLeft()
                            , j = 0;
                        v.on('click', function () {
                            t();
                            var e = l[w[0] - 2] || 0
                                , n = b - e < 0 ? 0 : b - e;
                            i.animate({
                                scrollLeft: n
                            }, 500, function () {
                                w = [],
                                    b = i.scrollLeft()
                            })
                        }),
                            y.on('click', function () {
                                t();
                                var e = w[w.length - 1]
                                    , n = l[e] || c;
                                i.animate({
                                    scrollLeft: b + n
                                }, 500, function () {
                                    w = [],
                                        b = i.scrollLeft()
                                })
                            }),
                            i.on('scroll', function () {
                                b = i.scrollLeft(),
                                j < b && i.addClass('show-shadow'),
                                j > b && 0 === b && (i.removeClass('show-shadow'),
                                    e(this).siblings('.js-table-scroll__shadow').remove());
                                for (var t = 0; t < r.length; t++) {
                                    var n = t + 1;
                                    d.children(':nth-child(' + n + ')').removeClass('off-screen'),
                                        h[t] += j - b,
                                        m[t + 1] += j - b,
                                    0 != t && (h[t] < r[1] && m[t + 1] <= r[1] ? d.children(':nth-child(' + n + ')').addClass('off-screen') : h[t] >= s && m[t + 1] > s ? d.children(':nth-child(' + n + ')').addClass('off-screen') : h[t] < r[1] && m[t + 1] > r[r.length - 1] ? d.children(':nth-child(' + n + ')').addClass('off-screen') : h[t] < r[1] && r[1] - h[t] > l[t] / 2 || m[t + 1] > s && m[t + 1] - s > l[t] / 2 ? d.children(':nth-child(' + n + ')').addClass('off-screen') : h[t] > r[1] && m[t + 1] < r[r.length - 1] && d.children(':nth-child(' + n + ')').removeClass('off-screen'))
                                }
                                j = b
                            })
                    } else
                        e(this).find('.fixed-col').removeClass('fixed-col').css('height', ''),
                            e(this).find('.js-data-table--scroll__column.spacer-col').remove(),
                            e(this).parent().siblings('.js-table-scroll__navigation').remove(),
                            e(this).siblings('.js-table-scroll__shadow').remove(),
                            i.removeClass('has-scrollbar')
                })
            }

            t(),
                e(window).on('resize', t)
        })
    }(jQuery),
    function (e) {
        function t() {
            e('.js-has-responsive-th').each(function () {
                var t = e(this)
                    , n = t.offset()
                    , i = e(window).scrollTop()
                    , a = e('.js-floating-header', this);
                i > n.top && i < n.top + t.height() && e(window).width() < 900 ? (i <= n.top + t.height() - a.height() && a.css({
                    top: '0'
                }),
                    'hidden' == a.css('visibility') ? (a.find('th').css({
                        width: t.width()
                    }),
                        a.css({
                            visibility: 'visible'
                        })) : i > n.top + t.height() - a.height() && a.css({
                        top: '-' + (i - (n.top + t.height() - a.height())) + 'px'
                    })) : 'visible' == a.css('visibility') && a.css({
                    visibility: 'hidden'
                })
            })
        }

        e('table:not(.non-responsive-table, .data-table--scroll)').each(function () {
            e(this).addClass('js-has-responsive-th'),
                e(this).find('th').length > 1 ? e(this).addClass('js-responsive-table-3-level responsive-table-3-level') : e(this).addClass('responsive-table-2-level')
        });
        var n, i = e(window).width() < 900;
        e('.js-has-responsive-th').each(function () {
            n = e('thead', this),
                n.before(n.clone()).addClass('js-floating-header floating-header')
        }),
            e(window).on('scroll', t).trigger('scroll'),
            e(window).on('resize', function () {
                e('.js-has-responsive-th').each(function () {
                    e(window).width() < 900 ? 0 == i ? (i = !0,
                        t()) : e('.js-floating-header th', this).css('width', e(this).width()) : (e('.js-floating-header', this).css('visibility', 'hidden'),
                        i = !1)
                })
            }),
            function () {
                e('table').each(function () {
                    if (e(this).hasClass('js-responsive-table-3-level')) {
                        var t = 0
                            , n = e(this);
                        e('thead:not(.js-floating-header) th', this).each(function (i) {
                            0 != i && (e('td:nth-child(' + (i + 1 + t) + ')', n).before('<td class="table-sub-heading">' + e(this).text() + '</td>'),
                                t++)
                        })
                    }
                })
            }()
    }(jQuery),
    function (e) {
        function t() {
            s && (s.attr('id', s.data('old-id')),
                s = null);
            var e = window.location.hash;
            -1 !== r.indexOf(e) ? n(e) : a >= 768 && n(r[0])
        }

        function n(t) {
            if (a >= 768) {
                t || (t = r[0]),
                    o.removeClass('selected').filter(function () {
                        return this.hash === t
                    }).addClass('selected'),
                    l.hide(),
                    l.removeClass('open');
                var n = l.filter(t);
                if (n.show(),
                    n.addClass('open'),
                    e('.js-accordion-section-title--tab-panel').removeClass('active'),
                    e(t).prev('.js-accordion-section-title--tab-panel').addClass('active'),
                'function' == typeof showPlaylist && showPlaylist(t),
                'function' == typeof mediaGallery && t) {
                    t = t.replace('#', '');
                    var i = e('#' + t + ' .js-gallery-panel');
                    i.length > 0 && mediaGallery(i.attr('id'))
                }
            }
        }

        var i = e(window)
            , a = i.width()
            , s = null
            , o = e('.js-tab-link').on('click', function () {
            s = e(this.hash),
            location.hash === this.hash && setTimeout(t, 0)
        })
            , r = o.map(function () {
            return this.hash
        }).get()
            , l = e(r.join(',')).each(function () {
            e(this).data('old-id', this.id)
        });
        i.on('hashchange resize', function () {
            a = i.width(),
                t()
        }),
            -1 !== r.indexOf(window.location.hash) ? t() : n()
    }(jQuery),
    jQuery('.js-video-panel').each(function () {
        var e = $(this).data('providers')
            , t = $(this).data('locations')
            , n = $(this).data('institutes')
            , i = $(this).attr('id');
        delayedLoad('#' + i, function () {
            jQuery.ajax({
                url: '/Video/Panel',
                type: 'POST',
                data: {
                    providers: e,
                    locations: t,
                    institutes: n
                },
                context: this,
                success: function (e) {
                    var t = e;
                    if (t.count > 4 && (t.more = !0),
                    0 === t.count)
                        $('#' + i).parent().hide();
                    else {
                        var n = Hogan.compile($('#video-template-' + i).text());
                        $.each(t.data, function (e, t) {
                            t.divId = 'kaltura_player_' + Math.floor(1e8 * Math.random()) + Date.now().toString()
                        }),
                            $('#' + i).html(n.render(t)),
                            $.each(t.data, function (e, t) {
                                videoEmbed(t.divId, t.Id)
                            })
                    }
                    $('.js-teaser-list__load-more').each(function (e) {
                        $('.js-teaser__item:gt(3)', this).hide()
                    })
                },
                error: function (e) {
                    $('#' + i).parent().hide(),
                        console.log('error', e)
                }
            })
        })
    }),
    window.waitTimes = function (e) {
        function t() {
            e('.js-wait-time').length && n()
        }

        function n() {
            a.queryWaitTimes(),
                e('.js-wait-time').each(function (t, n) {
                    n = e(n);
                    var a = n.data('resource')
                        , s = e.grep(waitTimeData, function (e) {
                        return e.ResourceID === a
                    });
                    if (1 === s.length)
                        if ('' !== s[0].WaitTime) {
                            var o = i(s[0].WaitTime);
                            n.html(o.waitHour + 'h:' + o.waitMinute + 'm')
                        } else
                            '' === s[0].WaitTime && n.html('0h:05m');
                    else
                        n.parent().hide(),
                            n.html('')
                })
        }

        function i(e) {
            e = Number(e);
            var t = Math.floor(e / 60)
                , n = Math.floor(e % 60);
            return {
                waitHour: t,
                waitMinute: n < 10 ? '0' + n : n
            }
        }

        var a = this;
        return a.waitTimeData = {},
            e(document).ready(t),
            a.queryWaitTimes = function () {
                e.ajax({
                    url: '/Location/WaitTimes',
                    type: 'POST',
                    data: {
                        locationType: ''
                    },
                    context: a,
                    async: !1,
                    timeout: 1e3,
                    success: function (e) {
                        a.waitTimeData = e
                    },
                    error: function (e) {
                        console.log('error', e)
                    },
                    complete: function () {
                        setTimeout(n, 3e5)
                    }
                })
            }
            ,
            a
    }(jQuery);
