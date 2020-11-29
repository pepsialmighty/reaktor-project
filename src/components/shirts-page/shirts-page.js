import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { URL_SHIRTS } from '../../config/paths';
import SkeletonProduct from './skeleton-product';
import { fetchCompanies, fetchProducts } from '../service/app.service';
const Pagination = lazy(() => import('../layout/pagination'));

const useStyles = makeStyles({
  jacket__container: {
    padding: '0 20px',
  },
  root: {
    minWidth: 275,
    border: '1px solid black',
    padding: '0 0',
  },
  card__container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card__title: {
    fontSize: 25,
    alignSelf: 'flex-start',
  },
  card__avaibility: {
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  card__price: {
    fontSize: 25,
    // marginRight: '3rem',
  },
  card__colorContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card__color: {
    height: '1rem',
    width: '1rem',
    margin: '0 0',
    backgroundColor: 'blue',
  },
});

const ShirtPage = () => {
  const [shirts, setShirts] = useState(null);
  const [avaibility, setAvaibility] = useState([]);
  const [data, setData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchShirts = async () => {
      const response = await fetchProducts(`${URL_SHIRTS}`);
      setShirts(response.data);
    };
    const fetchAvaibility = async () => {
      setData(await fetchCompanies());
    };
    fetchShirts();
    fetchAvaibility();
  }, []);

  useEffect(() => {
    if (data !== null) {
      data.then((res) => setAvaibility(res));
    }
  }, [data]);

  return (
    <div className={classes.jacket__container}>
      <h1>SHIRTS PAGE</h1>
      {avaibility.length !== 0 ? (
        <Link to='/'>
          <h3>Back</h3>
        </Link>
      ) : (
        <div>
          <h3>Back</h3>
        </div>
      )}
      <Suspense fallback={<SkeletonProduct />}>
        {shirts && (
          <Pagination
            array={shirts}
            avaibility={avaibility ? avaibility : undefined}
          />
        )}
        {!shirts && [1, 2, 3, 4, 5].map((i) => <SkeletonProduct key={i} />)}
      </Suspense>
    </div>
  );
};

export default ShirtPage;
