(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/charts-column"],{Ql3f:function(t,s,i){"use strict";i.r(s);var e=i("LvDl"),a=i.n(e),o=i("jiNK"),n=i("6jAQ"),r=Object.create(n.default);s.default=r,function(t){this.instanceClass=o.Column,this.setupChartOptions=function(){t.setupChartOptions.call(this);var s=this.custom;this.chartOptions.series.data=!0===s.absoluteDistribution?"absolute":"separate"},this.setupChartSheetOptionsItem=function(t){var s={categories:{colors:a.a.merge([],this.themeColors,t.colors||this.colors)},grid:{vertical:!1,horizontal:!0},graphOptions:{column:{showValues:!!t.showInLineValues}},axis:[{},{}]};this.setupLegend(s,t),s.legend.enabled=!0===t.showLabels,t.categoryWidthAuto||(s.categories.categoryWidth=t.categoryWidth||this.defaultCategoryWidth);var i=s.axis[1];return i.title=t.ylabel||"",s.axis[0].title=t.xlabel||"","number"==typeof t.ymin&&(i.minLimit=t.ymin),"number"==typeof t.ymax&&(i.maxLimit=t.ymax),s.grid.horizontal=this.getGridSettingsHorizontal(t),s.grid.horizontalZero=this.getZeroBaselineHorizontal(t),void 0!==t.showInLineValuesOutside&&a.a.set(s,"graphOptions.column.valuesOutside",t.showInLineValuesOutside),this.assignAxisTickInterval(s,t),this.assignAxisTicks(s,t),this.assignNumberFormatValues({sheetOptions:s,custom:t,axis:[{id:"y",path:""}]}),this.assignNumberFormatLabels({sheetOptions:s,custom:t,affixes:[{id:"y",path:""},{id:"label",path:""}]}),this.assignCategoryLabelLayout(s.categories,t),s}}.call(r,n.default)}}]);