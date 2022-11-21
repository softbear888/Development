import DisplayList from './DisplayList'
import { useState, useEffect } from 'react';
import { Checkbox, FormGroup, FormControlLabel, Switch } from '@mui/material'
import FrogCard from './FrogCard'
import './App.css'

export default function FilteredList(props) {
    const [type, setType] = useState([]);
    const [filteredList, setFilteredList] = useState(props.list);

    const matchesFilterType = type => {

      let newList = [...props.list];

      if (type.includes("Weight")) {
        newList = newList.filter((frog) => {
          return frog.weight > 4.0;
        })
      }

      if (type.includes("Size")) {
        newList = newList.filter((frog) => {
          return frog.size === "Does fit in your palm";
        })
      }

      if (type.includes("Alphabetical")) {
        newList.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }

      setFilteredList(newList);
    }

    const handleFilter = filterName => {
      // get the current filters
      let newType = type;
      // if the box was already checked, remove the filter
      if (type.includes(filterName)) {
        newType = type.filter((filt) => {
          return filt !== filterName;
        })
      // if the box was unchecked, add the filter to the array
      } else {
        newType.push(filterName);
      }

      // update the type array
      setType([...newType]);
    //  matchesFilterType(type);
    }

    useEffect(() => {
      matchesFilterType(type)
    }, [type])

    return (
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox
            onClick={() => handleFilter("Weight")} />}
            label="Large frogs only" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox
            onClick={() => handleFilter("Size")} />}
            label="Fits in palm" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Switch
            onClick={() => handleFilter("Alphabetical")}/>}
            label="Sort alphabetically" />
        </FormGroup>
        {filteredList.map(frog =>
          <FrogCard frog={frog} onClick={props.onClick} party={props.party} />
        )}
      </div>
    )
}
