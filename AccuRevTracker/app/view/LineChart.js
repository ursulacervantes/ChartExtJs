/*
 * File: app/view/LineChart.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AccuRevTracker.view.LineChart', {
    extend: 'Ext.chart.Chart',

    requires: [
        'Ext.chart.Legend',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Time'
    ],

    height: 250,
    width: 400,
    animate: true,
    insetPadding: 20,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            legend: {

            },
            axes: [
                {
                    type: 'Numeric',
                    fields: [
                        'views',
                        'visits',
                        'users'
                    ],
                    grid: true,
                    title: 'Developers',
                    maximum: 200,
                    minimum: 0,
                    position: 'left'
                },
                {
                    type: 'Time',
                    groupBy: 'year,month,day',
                    aggregateOp: 'sum',
                    fields: [
                        'date'
                    ],
                    position: 'bottom',
                    title: 'Time Axis',
                    constrain: true,
                    dateFormat: 'M d',
                    fromDate: 'Wed Jan 01 2014 00:00:00 GMT-0500 (Hora est. Pacífico, Sudamérica)',
                    toDate: 'Tue Jul 01 2014 00:00:00 GMT-0500 (Hora est. Pacífico, Sudamérica)'
                }
            ]
        });

        me.callParent(arguments);
    }

});