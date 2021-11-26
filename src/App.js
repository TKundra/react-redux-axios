import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeUsers, fetchUsers } from './component/action/userAction';

function App() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  
  if(selector.loading) return (<h4>loading....</h4>)
  return (
    <>
      <button onClick={() => dispatch(removeUsers())}>
        make table empty
      </button>
      <table>
        <tbody>
          <tr>
            <th>username</th>
            <th>email</th>
            <th>address</th>
          </tr>
          {selector.users?.map((data) => (
            <tr key={data.id}>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.address["street"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;