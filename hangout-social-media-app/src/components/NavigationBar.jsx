import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';


const NavigationBar = () => {

  const location = useLocation({});

  const [showNavigationBar, setNavigationBar] = useState(false);
  useEffect(() => {
    console.log('this is location: ', location)
    if(location.pathname === '/authPage') {
      setNavigationBar(false)
    } else {
      setNavigationBar(true)
    }
  },[location] )
  return (
    <div>{showNavigationBar}</div>
  )
}

export default NavigationBar