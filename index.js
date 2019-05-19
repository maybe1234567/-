var timer = null;
var hvoerTimer = null;

$('#myJD').dropdown({
    title: '我的京东',
    width: 126,
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }],
    }]
})

$('#procurement').dropdown({
    title: '企业采购',
    width: 56,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});

$('#service').dropdown({
    title: '客户服务',
    width: 70,
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').dropdown({
    title: '网站导航',
    direction: 'x',
    menuList: [{
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        width: 340,
        itemWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }]
})

/*插入轮播图 */
$("#slider").carousel({
    imgList: ["http://img1.360buyimg.com/da/jfs/t1/19069/15/6476/98181/5c539ef8E761d1f78/b55e061e816683ad.jpg",
        "http://img1.360buyimg.com/pop/jfs/t1/23119/39/1904/49543/5c176baaE9cb004c2/7d9e6f6082f55966.jpg",
        "http://m.360buyimg.com/babel/jfs/t1/7929/16/14126/98815/5c54180bE41403b92/368b7051671df8aa.jpg",
        "http://m.360buyimg.com/babel/jfs/t1/32570/26/1526/78591/5c4ff5f9E24c691f3/29399169307c29f1.jpg"
    ],
});


/*左侧商品列表区数据 */
var menuList = [{
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, ];

/*渲染左侧商品列表区 */
function createMenuDom(data) {
    data.forEach(function (item, index) {
        var oLi = $('<li></li>');
        for (var i = 0; i < item.title.length; i++) {
            $('<a href="#">' + item.title[i] + '</a>').appendTo(oLi);
            if (i < item.title.length - 1) {
                $('<span>/</span>').appendTo(oLi);
            }
        }
        $('#menu-list').append(oLi);
    });
}
createMenuDom(menuList);

// 渲染左侧菜单栏里悬浮展示内容区
function renderMenuContent(data) {
    console.log(data);
    $("#show-content").html('');
    var tabListUl = $('<ul class="tabs"></ul>');
    var tabList = data.tabs;
    tabList.forEach(function (item) {
        console.log(item)
        $('<li>' + item + '</li>').appendTo(tabListUl);
    });
    var subs = data.subs;
    var content = $('<div class="item-content"></div>');
    for (var i = 0; i < subs.length; i++) {
        var sub = subs[i];
        var title = sub.title;
        var oDl = $('<dl></dl>');
        if (title) {
            oDl.append($('<dt>' + title + '</dt>'));
        }
        var dd = $('<dd></dd>');
        sub.items.forEach(function (value) {
            dd.append($('<a href="#">' + value + '</a>'))
        });
        dd.appendTo(oDl);
        content.append(oDl);
    }
    tabListUl.appendTo($('#show-content'));
    $('#show-content').append(content);
}

/*左侧商品列表区移入绑定事件 */
function bindMenuEvent() {
    $('#menu-list').on('mouseenter', 'li', function () {
        var index = $(this).index();
        $('#show-content').addClass('active')
        renderMenuContent(menuList[index].content);

    }).on('mouseleave', function (e) {
        timer = setTimeout(function () {
            $('#show-content').removeClass('active')
        }, 500);
    });
    $('#show-content').on('mousemove', function () {
        clearTimeout(timer);
    }).on('mouseleave', function () {
        $(this).removeClass('active');
    })
}
bindMenuEvent()


/*服务区事件 */
function serviceHover() {
    $('.service-entry').on('mouseenter', '.service-frame', function () {
        var name = $(this).find('i').eq(0).attr('class');
        hvoerTimer = setTimeout(function () {
            $('.j-services').addClass('service-extend');
        }, 1000)
    });
    $('.service-frame').on('mouseenter', 'span', function () {
        $('.service-frame > a').find('.active').removeClass('active');
        $(this).addClass('active');
    })
    $('.service-pop > .close').click(function (e) {
        e.stopPropagation();
        clearTimeout(hvoerTimer);
        $('.j-services').removeClass('service-extend');
    })
    // $('.j-services').on('mouseleave', function () {
    //     $('.service-pop').removeClass('service-extend');
    // })
}
serviceHover();
/*搜索框部分 */
var ajaxTimer = null;

function searchEvent() {
    $('.search-inp').on('keyup', function (e) {
        clearTimeout(ajaxTimer); //防抖
        var val = this.value;
        ajaxTimer = setTimeout(function () {
            $.ajax({
                url: 'https://suggest.taobao.com/sug',
                type: 'GET',
                data: {
                    q: val,
                    callback: 'addItem',
                    code: 'utf-8'
                },
                dataType: 'jsonp',

            })
        }, 500);
        $('#shelper').show();
    });
    $('.search-bar').on('mousemove', function (e) {
        e.stopPropagation();
    })
    $(document).on('mousemove', function () {
        $('#shelper').hide();
    });
}
/*搜索列表*/
function addItem(data) {
    $('#shelper').html('');
    console.log(data);
    //     <ul>
    //     <li>
    //         <a href="#">xxxx</a>
    //         <span>约1231234个</span>
    //     </li>
    //     <li><a href="#">xdddd</a>
    //     <span>123</span>
    //     </li>
    // </ul>
    var oUl = $('<ul></ul>');

    data.result.forEach(function (item, index) {
        $('<li><a href=""> ' + item[0] + '</a><span>' + item[1] + '</span></li>').appendTo(oUl);
    })
    oUl.appendTo($('#shelper'))
}
searchEvent()

/*地区列表 */
$('.location').on("mouseenter", function () {
    $('.province').css({
        display: 'block'
    })
})
$('.province').on('mouseleave', function () {
    $('.province').css({
        display: 'none'
    })

})


var areaList = {
    items: [{
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '山西',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '河南',
        href: '#',
    }, {
        name: '辽宁',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '吉林',
        href: '#'
    }, {
        name: '内蒙古',
        href: '#',
    }, {
        name: '江苏',
        href: '#'
    }, {
        name: '山东',
        href: '#',
    }, {
        name: '安徽',
        href: '#',
    }, {
        name: '浙江',
        href: '#',
    }, {
        name: '福建',
        href: '#'
    }, {
        name: '湖北',
        href: '#',
    }, {
        name: '湖南',
        href: '#'
    }, {
        name: '广东',
        href: '#',
    }, {
        name: '广西',
        href: '#',
    }, {
        name: '江西',
        href: '#',
    }, {
        name: '四川',
        href: '#'
    }, {
        name: '海南',
        href: '#',
    }, {
        name: '贵州',
        href: '#'
    }, {
        name: '云南',
        href: '#'
    }, {
        name: '西藏',
        href: '#'
    }, {
        name: '陕西',
        href: '#'
    }, {
        name: '甘肃',
        href: '#'
    }, {
        name: '青海',
        href: '#'
    }, {
        name: '宁夏',
        href: '#'
    }, {
        name: '新疆',
        href: '#'
    }, {
        name: '港澳',
        href: '#'
    }, {
        name: '台湾',
        href: '#'
    }, {
        name: '钓鱼岛',
        href: '#'
    }],
    nowItem: '陕西',
}

function Mlocation(areaList) {
    var len = areaList.items.length;
    var str = '';
    for (var i = 0; i < len; i++) {
        str += `<li>${areaList.items[i].name}</li>`
        if(areaList.items[i].name == areaList.nowItem){
            str+= `<li class='active'>${areaList.items[i].name}</li>`
        }
    }
    $('.province-list').append(str);


}
Mlocation(areaList)

