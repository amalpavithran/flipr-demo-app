import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar'
import './Timer.css';

export default function Timer(props) {
    const [counter, setCounter] = React.useState(props.maxTimer);
    const [visible, setVisible] = React.useState(true);
    // Third Attempts
    React.useEffect(() => {
      if(counter<=0){
        setVisible(false);
        props.hasStarted(true);

      }
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
  
    return (
      visible?
      <div>
      <div className="Timer">
        <div>Match Starts in : {counter}s</div>
      </div>
      <ProgressBar animated now={100-((100/props.maxTimer)*counter)} />
      </div>
      :<div />
    );
  }
  