import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <EmployeeProvider>
          <AnimalProvider>
            <Route
              exact
              path="/locations"
              render={(props) => <LocationList {...props} />}
            />

            <Route
              path="/locations/:locationId(\d+)"
              render={(props) => <LocationDetail {...props} />}
            />
          </AnimalProvider>
        </EmployeeProvider>
      </LocationProvider>

      <EmployeeProvider>
        <AnimalProvider>
          <LocationProvider>
            {/* Render the employee list when http://localhost:3000/ */}
            <Route
              exact
              path="/employees"
              render={(props) => <EmployeeList {...props} />}
            />

            <Route
              path="/employees/create"
              render={(props) => <EmployeeForm {...props} />}
            />

            {/* New route for showing employee details */}
            <Route
              path="/employees/:employeeId(\d+)"
              render={(props) => <EmployeeDetail {...props} />}
            />
          </LocationProvider>
        </AnimalProvider>
      </EmployeeProvider>

      <CustomerProvider>
        {/* Render the customer list when http://localhost:3000/ */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route
              exact
              path="/animals"
              render={(props) => (
                <>
                  <AnimalSearch />
                  <AnimalList {...props} />
                </>
              )}
            />
            <Route
              path="/animals/create"
              render={(props) => <AnimalForm {...props} />}
            />

            <Route
              path="/animals/:animalId(\d+)"
              render={(props) => <AnimalDetail {...props} />}
            />

            <Route
              path="/animals/edit/:animalId(\d+)"
              render={(props) => <AnimalForm {...props} />}
            />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>
    </>
  );
};
