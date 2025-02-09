/* eslint-disable camelcase */

const bezier = require('bezier-easing')

module.exports = {
  config: {
    steps: 12
  },
  colors: [
    {
      name: 'Gray',
      specs: {
        hue_start: 340,
        hue_end: 200,
        hue_curve: 'easeOutQuad',
        sat_start: 4,
        sat_end: 100,
        sat_curve: 'easeInSine',
        sat_rate: 30,
        lum_start: 97,
        lum_end: 9,
        lum_curve: bezier(0.45, 0.35, 0.5, 0.5)
      }
    },
    {
      name: 'Blue',
      specs: {
        hue_start: 210,
        hue_end: 200,
        hue_curve: 'easeInQuad',
        sat_start: 3,
        sat_end: 90,
        sat_curve: 'easeOutQuad',
        sat_rate: 110,
        lum_steps: [
          97, 96.5, 94, 90, 85, 77, 69.5, 59, 47, 35, 22.6, 11
        ]
      }
    },
    {
      name: 'Purple',
      specs: {
        hue_start: 330,
        hue_end: 290,
        hue_curve: 'easeOutQuad',
        sat_start: 3,
        sat_end: 80,
        sat_curve: 'easeOutQuad',
        sat_rate: 80,
        lum_steps: [
          95, 94, 89, 83, 77, 70, 61, 51, 43, 33, 23, 13
        ]
      }
    },
    {
      name: 'Pink',
      specs: {
        hue_start: 340,
        hue_end: 330,
        hue_curve: 'easeInQuad',
        sat_start: 4,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 90,
        lum_steps: [
          96, 98, 97, 95, 92, 89, 79, 67, 55, 44, 31, 15
        ]
      }
    },
    {
      name: 'Red',
      specs: {
        hue_start: 355,
        hue_end: 360,
        hue_curve: 'easeOutQuad',
        sat_steps: [
          4, 20, 35, 50, 60, 65, 75, 75, 74, 73, 73, 73
        ],
        lum_steps: [
          97, 100, 100, 100, 97.4, 90, 84, 70, 54, 41, 27, 14
        ]
      }
    },
    {
      name: 'Orange',
      specs: {
        hue_start: 25,
        hue_end: 35,
        hue_curve: 'easeOutQuad',
        sat_start: 4,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 130,
        lum_steps: [
          97, 99, 100, 98, 90, 84, 69.9, 54, 44, 33, 21, 12
        ]
      }
    },
    {
      name: 'Yellow',
      specs: {
        hue_start: 40,
        hue_end: 50,
        hue_curve: 'easeOutQuad',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 140,
        lum_steps: [
          97, 97, 95, 94, 86, 71.5, 56.4, 44, 36, 27, 19, 11
        ]
      }
    },
    {
      name: 'Green',
      specs: {
        hue_start: 150,
        hue_end: 130,
        hue_curve: 'easeOutQuad',
        sat_start: 3,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 170,
        lum_steps: [
          97, 96, 89, 82, 73, 64, 54, 44, 36, 27, 19, 11
        ]
      }
    },
    {
      name: 'Celadon',
      specs: {
        hue_start: 160,
        hue_end: 170,
        hue_curve: 'easeOutQuad',
        sat_start: 3,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 150,
        lum_steps: [
          97, 92, 84, 74, 66, 57, 49.5, 40.2, 31.4, 23, 15.4, 11
        ]
      }
    },
    {
      name: 'WordPress Blue',
      specs: {
        hue_start: 197,
        hue_end: 205,
        hue_curve: 'easeInExpo',
        sat_steps: [
          6, 19, 32, 49, 70, 85, 100, 100, 100, 100, 100, 100
        ],
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.45, 0.35, 0.6, 0.85)
      }
    },
    {
      name: 'Jetpack Green',
      specs: {
        hue_start: 80,
        hue_end: 140,
        hue_curve: 'easeOutSine',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 130,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.5, 0.5, 0.85, 1)
      }
    }
  ]
}
