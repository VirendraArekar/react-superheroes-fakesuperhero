import { combineReducers } from 'redux';
import CharacterReducer from './CharacterReducer';
import HeroDetailReducer from './HeroDetailReducer';
import HeroImageReducer from './HeroImageReducer';
import HeroPowerStateReducer from './HeroPowerStateReducer';
import HeroAppearanceReducer from './HeroAppearanceReducer';
import HeroBiogaphyReducer from './HeroBiogaphyReducer';
import HeroConnectionReducer from './HeroConnectionReducer';
import HeroWorkReducer from './HeroWorkReducer';
import SearchHeroReducer from './SearchHeroReducer';

export default combineReducers({ char: CharacterReducer, hero:HeroDetailReducer,img:HeroImageReducer,strength:HeroPowerStateReducer,appear:HeroAppearanceReducer,bio:HeroBiogaphyReducer,con:HeroConnectionReducer,work:HeroWorkReducer,find:SearchHeroReducer });
