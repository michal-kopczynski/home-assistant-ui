import { useRef, useEffect } from 'react';
import type { MutableRefObject } from 'react';
import { VscDash, VscArrowSmallUp, VscArrowSmallDown } from "react-icons/vsc";

function usePrevious<T>(
  value: T,
): MutableRefObject<T | undefined>['current'] {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const SensorParameter = ({name, value, unit}: {name: string, value: number | undefined, unit: string}) => {
  const previous = usePrevious(value);

  return (
    <li className="sensor-data">
      <span>{name}</span>
      <div>
        <span>{value ? `${value}${unit}` : ""}</span>
        { previous && value && previous !== value 
          ? value >= previous ? <VscArrowSmallUp/> : <VscArrowSmallDown/>
          : <VscDash/> }
      </div>
    </li>
  )
}

export default SensorParameter;
