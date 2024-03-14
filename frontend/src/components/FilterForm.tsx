import React, {ChangeEvent} from 'react';
import {Form} from 'react-bootstrap';

interface FilterFormProps {
    handleFilterChange: (filterType: string, filterValue: string | number | boolean) => Promise<void>;
}

const FilterForm  = ({handleFilterChange}: FilterFormProps) => {
    const handleChange = async (event: ChangeEvent<any>) => {
        const {name, value, checked} = event.target;
        const filterValue = name === 'screeningTime' ? checked : value;
        await handleFilterChange(name, filterValue);
    };


    return (
        <Form className="d-flex align-items-center gap-3">
            <Form.Group>
                <Form.Control as="select" name="genre" onChange={handleChange}>
                    <option value="">Select Genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control as="select" name="language" onChange={handleChange}>
                    <option value="">Select Language</option>
                    <option value="english">English</option>
                    <option value="estonian">Estonian</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control as="select" name="ageLimit" onChange={handleChange}>
                    <option value="">Select Age Limit</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Check
                    type="switch"
                    id="screeningTimeToggle"
                    label="Screening Time"
                    name="screeningTime"
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    );
};

export default FilterForm;
