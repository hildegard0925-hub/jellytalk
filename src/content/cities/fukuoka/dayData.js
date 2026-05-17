import day1Map from '../../../assets/maps/fukuoka/day1.png'
import day2Map from '../../../assets/maps/fukuoka/day2.png'
import day3Map from '../../../assets/maps/fukuoka/day3.png'

import day1Places from './day1/places'
import day2Places from './day2/places'
import day3Places from './day3/places'
import missionPools from './missions/missionPools'

const dayData = {

  1: {
    title: '후쿠오카 도착',

    map: day1Map,

    places: day1Places,

    missionPools,
  },

  2: {
    title: '하카타 탐험',

    map: day2Map,

    places: day2Places,

    missionPools,
  },

  3: {
    title: '여행 마지막 날',

    map: day3Map,

    places: day3Places,

    missionPools,
  },

}

export default dayData