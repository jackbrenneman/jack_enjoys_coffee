/**
 * Constants and such.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import BuildIcon from '@material-ui/icons/Build';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export const drawerPages = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    path: '/home',
  },
  {
    name: 'Data',
    icon: <AssessmentIcon />,
    path: '/data',
  },
  {
    name: 'Coffee',
    icon: <LocalCafeIcon />,
    path: '/coffee',
  },
  {
    name: 'Equipment',
    icon: <BuildIcon />,
    path: '/equipment',
  },
  {
    name: 'Blog',
    icon: <LibraryBooksIcon />,
    path: '/blog',
  },
];

// Used for the default time. Defaults to current day.
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const defaultDate = `${year}-${month > 9 ? month : `0${month}`}-${day}`;

// Default state for a coffee entry
export const defaultCoffeeEntry = {
  time: {
    date: defaultDate,
    timeOfDay: 0,
  },
  coffee: {
    name: '',
    roaster: '',
    origin: '',
    process: 0,
  },
  brew: {
    method: 0,
    brewer: 0,
    drink: 0,
    grind: {
      grinder: '',
      setting: null,
    },
    water: '',
    in: null,
    out: null,
  },
  rating: 8,
  note: '',
};

// All the Time info for a coffee entry
const timePropTypesShape = {
  date: PropTypes.string,
  timeOfDay: PropTypes.number,
};

// All the Coffee info for a coffee entry
const coffeePropTypesShape = {
  name: PropTypes.string,
  roaster: PropTypes.string,
  origin: PropTypes.string,
  process: PropTypes.number,
};

// All the Grind info for a coffee entry
const grindPropTypesShape = {
  grinder: PropTypes.string,
  setting: PropTypes.number,
};

// All the Brew Info for a coffee entry
const brewPropTypesShape = {
  method: PropTypes.number,
  brewer: PropTypes.number,
  drink: PropTypes.number,
  grind: PropTypes.shape(grindPropTypesShape),
  water: PropTypes.string,
  in: PropTypes.number,
  out: PropTypes.number,
};

export const coffeeEntryPropTypesShape = {
  coffeeEntry: PropTypes.shape({
    time: PropTypes.shape(timePropTypesShape),
    coffee: PropTypes.shape(coffeePropTypesShape),
    brew: PropTypes.shape(brewPropTypesShape),
    rating: PropTypes.number,
    note: PropTypes.string,
  }).isRequired,
  setCoffeeEntry: PropTypes.func.isRequired,
};
