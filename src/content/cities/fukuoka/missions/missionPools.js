import restaurantMissions from './restaurant'
import stationMissions from './station'
import hotelMissions from './hotel'
import convenienceMissions from './convenience'
import cafeMissions from './cafe'
import shoppingMissions from './shopping'
import drugstoreMissions from './drugstore'
import izakayaMissions from './izakaya'
import tempuraMissions from './tempura'
import airportMissions from './airport'
import dessertMissions from './dessert'
import breakfastMissions from './breakfast'
import hotel2Missions from './hotel2'

const missionPools = {
  restaurant: restaurantMissions,

  station: stationMissions,

  hotel: hotelMissions,

  convenience: convenienceMissions,

  cafe: cafeMissions,
  
  shopping: shoppingMissions,

  drugstore: drugstoreMissions,

  izakaya: izakayaMissions,

  tempura: tempuraMissions,

  airport: airportMissions,

  dessert: dessertMissions,

  breakfast: breakfastMissions,

  hotel2: hotel2Missions,
}

export default missionPools