/*   */
 $(window).load(function(){
             $(".loading").fadeOut()
            })  
$(function () {
    //zqq
    $.ajax({
        type: "get",
        url: "http://localhost:8080/satis/getSatisList",
        success: function (msg) {
            console.log(msg);
            echarts_1(msg)
        }
    });
    $.ajax({
        type: "get",
        url: "http://localhost:8080/industry/getIndustryList",
        success: function (msg) {
            console.log(msg);
            echarts_2(msg)
        }
    });
    //zqq
    //lcl
    $.ajax({
        type: "get",
        url: "http://localhost:8080/direction/getDirectionList",
        success: function (msg) {
            console.log(msg);
            // 调用设置柱状图数据方法
            let countData = msg.countData
            let rateData = msg.rateData
            let count0 = countData[0];
            let rate0 = rateData[0];
            zb1(count0,rate0)
            let count1 = countData[1];
            let rate1 = rateData[1];
            zb2(count1,rate1)
            let count2 = countData[2];
            let rate2 = rateData[2];
            zb3(count2,rate2)
        }
    });
    //lcl
    //zqq
    function echarts_1(msg) {
        let attitudes = [];
        var objData = {}
        let dataList =[]
        for (let i = 0; i < msg.length; i++) {
            var attitude = msg[i]["attitude"];
            objData = { name: msg[i]["attitude"], value: msg[i]["value"] };
            attitudes.push(attitude);
            dataList.push(objData);
        }
        console.log(dataList);

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 0,
                top: 30,
                height: 160,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                orient: 'vertical',
                data: attitudes

            },
            calculable: true,
            series: [
                {
                    name: ' ',
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262', '#c25775', '#00b7be'],
                    type: 'pie',
                    radius: [30, 70],
                    center: ['35%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },

                    lableLine: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },

                    data: dataList
                },
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function (msg) {
            myChart.resize();
        });
    }
//zqq
    /*   */
    function echarts_2(msg) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        let dataNames = [];
        var objData = {}
        let dataList =[]
        for (let i = 0; i < msg.length; i++) {
            var industry = msg[i]["industry"];
            objData = { name: msg[i]["industry"], value: msg[i]["value"] };
            dataNames.push(industry);
            dataList.push(objData);
        }
        for (let i = 0; i < msg.length; i++) {
            var tempObj = {value: 0, name: "", label: {show: false}, labelLine: {show: false}};
            dataList.push(tempObj);
        }

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {

                top: '15%',
                data: dataNames,
                icon: 'circle',
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
            },
            calculable: true,
            series: [{
                name: '',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#c96262'],
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [51, 100],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '45%'],

                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        //  formatter: '{c}辆'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: dataList
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //zqq
//zxy——两个折线（平均期望薪资+平均实际薪资）
    $.ajax({
        type: "get",
        url: "http://localhost:8080/salary/getSalary",
        success: function (slr) {
            console.log(slr);
            // 调用设置柱状图数据方法
            echarts_3(slr)
        }
    });
    function echarts_3(slr) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

        let areaData=slr.areaData;
        let expectData=slr.expectData;
        let realData=slr.realData;

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                //icon: 'vertical',
                data: ['平均期望薪资', '平均实际薪资'],
                //align: 'center',
                // right: '35%',
                top:'0',
                textStyle: {
                    color: "#fff"
                },
                // itemWidth: 15,
                // itemHeight: 15,
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top:'10',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                data: areaData
            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '平均期望薪资',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
                data: expectData
            }, {
                name: '平均实际薪资',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#277ace',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12
                    }
                },
                data: realData
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(slr){
            myChart.resize();
        });
    }
//zxy——折线+柱状图（地区+就业人数+就业率）
    $.ajax({
        type: "get",
        url: "http://localhost:8080/work1/getWork1",
        success: function (wk) {
            console.log(wk);
            // 调用设置柱状图数据方法
            echarts_4(wk)
        }
    });
    function echarts_4(wk) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));


        let areaData=wk.areaData;
        let worknumData=wk.worknumData;
        let noworkData=wk.noworkData;
        let workrateData=wk.workrateData;

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                data: [
                    {name: "应届毕业生人数"},
                    {name: "未就业人数"},
                    {name: "就业率(含升学)"}
                ],
                top: "0%",
                textStyle: {
                    color: "rgba(255,255,255,0.9)"//图例文字
                }
            },

            xAxis: [
                {
                    type: "category",
                    data: areaData,
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)"
                        }
                    },
                    axisLabel:  {
                        textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: '14', },
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                    name: "人数(万)",
                    min: 0,
                    max: 40,
                    interval: 10,
                    axisLabel: {
                        show: true,

                    },
                    axisLine: {
                        lineStyle:
                            {color: 'rgba(255,255,255,.4)'}
                    },//左线色
                },
                {
                    type: "value",
                    name: "就业率",
                    min: 80.0,
                    max: 100.0,
                    interval: 5.0,
                    show: true,
                    axisLabel: {
                        show: true,
                    },
                    axisLine: {lineStyle: {color: 'rgba(255,255,255,.4)'}},//右线色
                    splitLine: {show:true,lineStyle: {color:"#001e94"}},//x轴线
                },
            ],
            grid: {
                top: "10%",
                right:"30",
                bottom:"30",
                left:"30",
            },
            series: [
                {
                    name: "应届毕业生人数",
                    type: "bar",
                    data: worknumData,
                    barWidth: "auto",
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "#609db8"
                                    },
                                    {
                                        offset: 1,
                                        color: "#609db8"
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    }
                },
                {
                    name: "未就业人数",
                    type: "bar",
                    data: noworkData,
                    barWidth: "auto",

                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "#66b8a7"
                                    },
                                    {
                                        offset: 1,
                                        color: "#66b8a7"
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
                    barGap: "0"
                },
                {
                    name: "就业率(含升学)",
                    type: "line",
                    yAxisIndex: 1,
                    data: workrateData,
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: "#cdba00",

                        }
                    },
                    smooth: true
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(wk){
            myChart.resize();
        });
    }
    //zxy
    //xf
    $.ajax({
        type: "get",
        url: "http://localhost:8080/post/getPostList",
        success: function(msg){
            console.log( msg );
            echarts_5(msg);
        }
    });

    function echarts_5(msg) {
        console.log('echarts_5...')
        console.log(msg)
        // 岗位名字
        let name = msg.names;
        // 薪水
        let salary = msg.salarys;

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
// 颜色
        var lightBlue = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'rgba(41, 121, 255, 1)'
            }, {
                offset: 1,
                color: 'rgba(0, 192, 255, 1)'
            }],
            globalCoord: false
        }

        var option = {
            tooltip: {
                show: false
            },
            grid: {
                top: '0%',
                left: '150',
                right: '14%',
                bottom: '0%',
            },
            xAxis: {
                min: 0,
                max: 20000,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                data: name,
                //offset: 15,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 14
                }
            },
            series: [{
                type: 'bar',
                label: {
                    show: true,
                    zlevel: 10000,
                    position: 'right',
                    padding: 10,
                    color: '#49bcf7',
                    fontSize: 14,
                    formatter: '{c}元'

                },
                itemStyle: {
                    color:'#49bcf7'
                },
                barWidth: '15',
                data: salary,
                z: 10
            }, {
                type: 'bar',
                barGap: '-100%',
                itemStyle: {
                    color:'#fff',
                    opacity: 0.1
                },
                barWidth: '15',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                z: 5
            }],
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }//xf
	//lcl
function zb1(count,rate) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));

option = {	
    series: [{
		
        type: 'pie',
        radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: count,
            name: '考公',
            label: {
                normal: {
                    formatter: count +'',
                    textStyle: {
                        fontSize: 20,
						color:'#fff',
                    }
                }
            }
        }, {
            value: rate,
            name: '考公',
            label: {
                normal: {
                 formatter : function (params){
                 return '占比'+rate+ '%'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb2(count,rate) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
      option = {
	
//animation: false,
    series: [{	
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#cdba00',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: count,
            name: '考研',
            label: {
                normal: {
                    formatter: count +'',
                    textStyle: {
                        fontSize: 20,
						color:'#fff',
                    }
                }
            }
        }, {
            value: rate,
            name: '考研',
            label: {
                normal: {
                 formatter : function (params){
                return '占比'+rate+ '%'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
/*   */
function zb3(count,rate) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#62c98d',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: count,
            name: '就业',
            label: {
                normal: {
                    formatter: count +'',
                    textStyle: {
                        fontSize: 20,
						color:'#fff',
                    }
                }
            }
        }, {
            value: rate,
            name: '就业',
            label: {
                normal: {
                 formatter : function (params){
                return '占比'+rate+ '%'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})
//lcl


		
		
		


		









