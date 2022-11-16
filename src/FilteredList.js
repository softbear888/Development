import DisplayList from './DisplayList'
import { useState, useEffect } from 'react';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import FrogCard from './FrogCard'

export default function FilteredList(props) {
    const [type, setType] = useState("All");
    const [filteredList, setFilteredList] = useState(props.list);

    // const selectFilterType = eventKey => {
    //     setType(eventKey);
    //   };

    const filteredByWeight = props.list.filter((frog) => {
        return frog.weight > 4.0;
    })

    const filteredBySize = props.list.filter((frog) => {
        return frog.size === "Does fit in your palm"
    })

    const filteredByWeightAndSize = filteredByWeight.filter((frog) => {
        return frog.size === "Does fit in your palm"
    })

    const matchesFilterType = type => {
      // all items should be shown when no filter is selected
      if (type === "All") {
          setFilteredList(props.list);
        } else if (type === "Weight") {
          setFilteredList(filteredByWeight);
        } else if (type === "Size") {
          setFilteredList(filteredBySize);
        } else if (type === "WeightSize") {
          setFilteredList(filteredByWeightAndSize);
        } else {
        return false
      }
    }

    const handleWeightFilter = () => {
      console.log(type);
      if (type === "All") {
        setType("Weight");
      } else if (type === "Weight") {
        setType("All");
      } else if (type === "Size") {
        setType("WeightSize");
      }

      matchesFilterType(type);
    }

    const handleSizeFilter = () => {
      if (type === "All") {
        setType("Size");
      } else if (type === "Size") {
        setType("All");
      } else if (type === "Weight") {
        setType("WeightSize");
      }

      matchesFilterType(type);
    }

    // useEffect(() => {
    //   handleFilter();
    // }, type);

    return (
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox
            onChange={handleWeightFilter} />}
            label="Large frogs only" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox
            onChange={handleSizeFilter} />}
            label="Can fit in palm" />
        </FormGroup>
        {filteredByWeightAndSize.map(frog =>
          <FrogCard frog={frog} />
        )}
      </div>
    )
}
