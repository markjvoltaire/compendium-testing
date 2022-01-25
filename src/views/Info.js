import React, { useEffect, useState } from 'react';
import InfoLists from '../Components/InfoList';
import { getInfo } from '../services/getInfo';

export default function Info() {
  const [info, setInfo] = useState([]);
  const [type, setType] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInfo(type);
      console.log(data);
      setInfo(data);
      setLoading(false);
    };
    fetchData();
  }, [type]);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <InfoLists setType={setType} type={type} info={info} />
    </div>
  );
}
