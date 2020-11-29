import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import SkeletonAvaibility from '../../skeletons/skeleton-avaibility';

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
    margin: '0 0',
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

const MyCard = ({ props, availability }) => {
  const classes = useStyles();
  const [avaibility, setAvaibility] = useState(null);

  useEffect(() => {
    setAvaibility(availability);
  }, [availability]);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.card__container}>
        <div>
          <Typography className={classes.card__title} color='textSecondary'>
            {props.name} (price: {props.price})
          </Typography>
          <hr />
          <Typography
            className={classes.card__avaibility}
            color='textSecondary'
          >
            {props.manufacturer}
          </Typography>
        </div>
        <div style={{ marginRight: '3rem' }}>
          {avaibility && avaibility.length !== 0 ? (
            <Typography className={classes.card__price} color='textSecondary'>
              <span
                style={{ margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html: avaibility[0].DATAPAYLOAD,
                }}
              ></span>
            </Typography>
          ) : (
            <span style={{ margin: 0 }}>
              <SkeletonAvaibility />
            </span>
          )}

          <div className={classes.card__colorContainer}>
            {props.color.map((color, i) => (
              <div
                key={i}
                className={classes.card__color}
                style={{ backgroundColor: `${color}` }}
              ></div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyCard;
