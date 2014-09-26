// app/models/item.js
import DS from 'ember-data';

var Code = DS.Model.extend({
    code: DS.attr('string'),
    abbrev: DS.attr('string'),
    desc: DS.attr('string'),
    isSuffix: DS.attr('boolean'),
    isCotsCourse: DS.attr('boolean'),
    suffixes: DS.hasMany('item', { async: true }),
    editText: function(){
        return 'Edit ' + this.get('abbrev');
    }.property('abbrev'),
    deleteText: function(){
        return 'Permanantly delete ' + this.get('abbrev');
    }.property('abbrev')
});

Code.reopenClass({
    FIXTURES: [
        {
            id: 101,
            code: 'E5180',
            abbrev: 'Teach ILO',
            desc: 'teach instructor led online class',
            isSuffix: true
        },
        {
            id: 102,
            code: 'E0038',
            abbrev: 'I2 or Classroom Setup',
            desc: 'support for instructor led online class or classroom setup and preparation',
            isSuffix: true
        },
        {
            id: 1,
            code: 'C04416',
            abbrev: 'ARC4',
            desc: 'ArcGIS 4: Sharing Content on the Web',
            isSuffix: false,
            isCotsCourse: true,
            suffixes: [101, 102]
        },
        {
            id: 2,
            code: 'C04210',
            abbrev: 'ARC1',
            desc: 'ArcGIS 1: Introduction to GIS',
            isSuffix: false,
            isCotsCourse: true,
            suffixes: [101, 102]
        },
        {
            id: 3,
            code: 'C04232',
            abbrev: 'ARC2',
            desc: 'ArcGIS 2: Essential Workflows',
            isSuffix: false,
            isCotsCourse: true,
            suffixes: [101, 102]
        },
        {
            id: 4,
            code: 'C04247',
            abbrev: 'ARC3',
            desc: 'ArcGIS 3: Performing Analysis',
            isSuffix: false,
            isCotsCourse: true,
            suffixes: [101, 102]
        },
        {
            id: 5,
            code: 'C04231',
            abbrev: 'IMGD',
            desc: 'Introduction to the Multiuser Geodatabase',
            isSuffix: false,
            isCotsCourse: true,
            suffixes: [101, 102]
        },
        {
            id: 6,
            code: '4710',
            abbrev: 'OVR',
            desc: 'General overhead - instructor labor'
        }

    ]
});

export default Code;