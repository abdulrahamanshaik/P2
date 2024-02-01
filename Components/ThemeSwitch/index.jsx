import {Switch} from 'react-native';

import {Context} from '../../Components/ContextApi';

const ThemeSwitch = () => {
  const {isDarkMode, toggleTheme} = Context();
  // console.log(isDarkMode);

  return <Switch value={isDarkMode} onValueChange={toggleTheme} />;
};

export default ThemeSwitch;
