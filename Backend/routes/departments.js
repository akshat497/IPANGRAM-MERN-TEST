const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Departments = require("../models/Departments");
const checkRole = require("../middleware/checkRole");
const handleResponse = require("../services/handleResponse");
const User = require("../models/User");

router.get("/get-all-departments", fetchuser, checkRole,async (req, res) => {
  try {
    const departments = await Departments.find();
    handleResponse(res, true, departments);
  } catch (error) {
    console.error(error.message);
    handleResponse(res, false, null, "Server Error", 500);
  }
});
router.get("/get-all-departments-of-manager", fetchuser,checkRole, async (req, res) => {
  try {
    const departments = await Departments.find({ manager: req.user.id });
    handleResponse(res, true, departments);
  } catch (error) {
    console.error(error.message);
    handleResponse(res, false, null, "Server Error", 500);
  }
});

router.post(
  "/add-departments",
  fetchuser,
  checkRole,
  [
    body("name", "length of name must be 3 characters").isLength({ min: 3 }),
    body("description", "length of description must be 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { name, description } = req.body;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return handleResponse(res, false, null, errors.array(), 400);
      }

      const department = await new Departments({
        name,
        description,
        manager: req.user.id,
        employees: [],
      });
      const savedDepartment = await department.save();
      handleResponse(res, true, savedDepartment);
    } catch (error) {
      console.error(error.message);
      handleResponse(res, false, null, "Server Error", 500);
    }
  }
);

router.put(
  "/update-department/:id",
  fetchuser,
  checkRole,
  [
    body("name", "Length of name must be 3 characters").isLength({ min: 3 }),
    body("description", "Length of description must be 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { name, description } = req.body;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return handleResponse(res, false, null, errors.array(), 400);
      }

      const updatedDepartment = {};

      if (name) {
        updatedDepartment.name = name;
      }

      if (description) {
        updatedDepartment.description = description;
      }
  console.log(req.params.id)
      let department = await Departments.findById(req.params.id);

      if (!department) {
        return handleResponse(res, false, null, "Department not found", 404);
      }

      if (department.manager.toString() !== req.user.id) {
        return handleResponse(res, false, null, "Unauthorized", 401);
      }

      department = await Departments.findByIdAndUpdate(
        req.params.id,
        { $set: updatedDepartment },
        { new: true }
      );

      handleResponse(res, true, department);
    } catch (error) {
      console.error(error.message);
      handleResponse(res, false, null, "Server Error", 500);
    }
  }
);

router.delete(
  "/delete-department/:id",
  fetchuser,
  checkRole,
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return handleResponse(res, false, null, errors.array(), 400);
      }

      let department = await Departments.findById(req.params.id);

      if (!department) {
        return handleResponse(res, false, null, "Department not found", 404);
      }

      if (department.manager.toString() !== req.user.id) {
        return handleResponse(res, false, null, "Unauthorized", 401);
      }

      await Departments.findByIdAndDelete(req.params.id);

      handleResponse(res, true, { message: "Department is deleted" });
    } catch (error) {
      console.error(error.message);
      handleResponse(res, false, null, "Server Error", 500);
    }
  }
);
router.put("/assign-department", fetchuser, checkRole, async (req, res) => {
  try {
    // Assuming the request body contains the employee ID and department ID
    const { employeeId, departmentId } = req.body;

    // Find the department by ID
    const department = await Departments.findById(departmentId);
    if (!department) {
      return handleResponse(res, false, null, "Department not found");
    }

   
    
    // Find the employee by ID
    const employee = await User.findById(employeeId);
    if (!employee) {
      return handleResponse(res, false, null, "Employee not found");
    }
    
    
   
    // Check if the employee is already assigned to the department
    if (department.employees.includes(employeeId)) {
      return handleResponse(
        res,
        false,
        null,
        "Employee is already assigned to this department"
      );
    }

    // Assign the employee to the department
    const updatedemployee={
        department:departmentId
   }
   await User.findByIdAndUpdate(
       employeeId,
       { $set: updatedemployee },
       { new: true }
     );
    department.employees.push(employeeId);
    await department.save();

    return handleResponse(
      res,
      true,
      null,
      "Employee assigned to the department successfully"
    );
  } catch (error) {
    console.error(error.message);
    return handleResponse(res, false, null, "Server Error");
  }
});

module.exports = router;
