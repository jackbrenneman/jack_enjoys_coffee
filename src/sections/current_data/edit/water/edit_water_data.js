/**
 * Edit Water Data. Allows users to edit Water Data
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
// Queries and Fetching
import { updateWaterMutation } from '../../../../graphql/mutations/water_gql_mutations.js';
import { writeGQL } from '../../../../graphql/fetch.js';

const useStyles = makeStyles(() => ({
  form: {
    width: '200px',
  },
  card: {
    padding: '0',
  },
  header: {
    padding: '0',
    paddingTop: '10px',
  },
  content: {
    padding: '0',
    '&:last-child': {
      padding: 0,
    },
  },
  resize: {
    fontSize: 12,
    textAlign: 'center',
  },
}));

function EditWaterData({ water, onSaveChangesSuccess, onSaveChangesFail }) {
  const classes = useStyles();

  const {
    water_id,
    name: currentName,
    description: currentDescription,
    is_active: currentActiveStatus,
  } = water;

  // State used for editing a coffee.
  const [waterData, setWaterData] = useState({
    name: currentName,
    description: currentDescription,
    is_active: currentActiveStatus,
  });

  const { name, description, is_active } = waterData;

  const handleChangeActiveStatus = (e) => {
    setWaterData({
      ...waterData,
      is_active: !is_active,
    });
  };

  const handleSaveChanges = () => {
    const waterInput = {
      name: name,
      description: description,
      is_active: is_active,
    };
    writeGQL(updateWaterMutation, {
      water: waterInput,
      water_id: parseInt(water_id),
    })
      .then(({ data }) => {
        const { updateWater: updatedWater } = data;
        if (updatedWater.water_id) {
          // Write was successful, let user know, update state and return
          onSaveChangesSuccess(waterData);
          return;
        }
        onSaveChangesFail();
        return;
      })
      .catch((e) => {
        onSaveChangesFail();
        console.log(e);
      });
    return;
  };

  const handleNameChange = (e) => {
    setWaterData({
      ...waterData,
      name: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setWaterData({
      ...waterData,
      description: e.target.value,
    });
  };

  return (
    <Box p={1}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Name
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  value={name}
                  id="name"
                  variant="outlined"
                  size="small"
                  onChange={handleNameChange}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                />
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Description
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  value={description}
                  id="description"
                  variant="outlined"
                  size="small"
                  onChange={handleDescriptionChange}
                  multiline
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                />
              </form>
            </Grid>
          </Grid>
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item>
              <Grid
                direction="column"
                container
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="caption" align="center">
                    Toggle Active
                  </Typography>
                </Grid>
                <Grid item>
                  <Switch
                    checked={is_active}
                    onChange={handleChangeActiveStatus}
                    name="is_active"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid xs={12} item>
              <Divider variant="middle" />
            </Grid>
          </Grid>
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item>
              <Box py={1}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleSaveChanges}
                >
                  <Typography variant="caption" align="center">
                    Save Changes
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

EditWaterData.propTypes = {
  water: PropTypes.shape({
    water_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    description: PropTypes.string,
    is_active: PropTypes.bool,
  }).isRequired,
  onSaveChangesSuccess: PropTypes.func.isRequired,
  onSaveChangesFail: PropTypes.func.isRequired,
};

export default EditWaterData;
