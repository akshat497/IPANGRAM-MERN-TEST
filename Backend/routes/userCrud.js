const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult ,query} = require("express-validator");
const Departments = require("../models/Departments");
const checkRole = require("../middleware/checkRole");
const handleResponse = require("../services/handleResponse");
const User = require("../models/User");

router.post('/filter-employees-by-name',fetchuser, [
   
    body('order').optional().isIn(['asc', 'desc']),
  ], async (req, res) => {
    try {
        const {direction}=req.body
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return handleResponse(res, false, null, errors.array(), 400);
      }
  
      var body = {};
  
      // Sorting order (default is ascending)
      let sortOrder = 1;
  
      // Check if order filter is provided
      if (direction && direction.toLowerCase() === 'desc') {
        sortOrder = -1;
      }
      
  
      // Sort employees by name
      const employees = await User.find().sort({ name: sortOrder });
  
      return handleResponse(res, true, employees);
    } catch (error) {
      console.error(error.message);
      return handleResponse(res, false, null, 'Server Error', 500);
    }
  });
  router.post('/filter-employees-by-location',fetchuser, [
   
    body('order').optional().isIn(['asc', 'desc']),
  ], async (req, res) => {
    try {
        const {direction}=req.body
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return handleResponse(res, false, null, errors.array(), 400);
      }
  
      var body = {};
  
      // Sorting order (default is ascending)
      let sortOrder = 1;
  
      // Check if order filter is provided
      if (direction && direction.toLowerCase() === 'desc') {
        sortOrder = -1;
      }
      
  
      // Sort employees by name
      const employees = await User.find().sort({ location: sortOrder });
  
      return handleResponse(res, true, employees);
    } catch (error) {
      console.error(error.message);
      return handleResponse(res, false, null, 'Server Error', 500);
    }
  });
  router.post('/getUserDetails', async (req, res) => {
    try {
     const {userId}=req.body
  
      
  
     
  
      // Sort employees by name
      const employees = await User.findById(userId)
  
      return handleResponse(res, true, employees);
    } catch (error) {
      console.error(error.message);
      return handleResponse(res, false, null, 'Server Error', 500);
    }
  });
  router.put(
    "/update-employee/:id",
    fetchuser,
    checkRole,
 
    async (req, res) => {
      try {
        const { name, location,phone, } = req.body;
        const errors = validationResult(req);
  
        if (!errors.isEmpty()) {
          return handleResponse(res, false, null, errors.array(), 400);
        }
  
        const updatedEmployee = {};
  
        if (name) {
          updatedEmployee.name = name;
        }
  
        if (location) {
            updatedEmployee.location = location;
        }
        if (phone) {
            updatedEmployee.phone = phone;
        }
  
        let employee = await User.findById(req.params.id);
     console.log(employee)
        if (!employee) {
          return handleResponse(res, false, null, "employee not found", 404);
        }
  
        
  
        employee = await User.findByIdAndUpdate(
          req.params.id,
          { $set: updatedEmployee },
          { new: true }
        );
  
        handleResponse(res, true, employee);
      } catch (error) {
        console.error(error.message);
        handleResponse(res, false, null, "Server Error", 500);
      }
    }
  );
  router.delete(
    "/delete-employee/:id",
    fetchuser,
    checkRole,
    async (req, res) => {
      try {
        const errors = validationResult(req);
  
        if (!errors.isEmpty()) {
          return handleResponse(res, false, null, errors.array(), 400);
        }
  
        let employee = await User.findById(req.params.id);
  
        if (!employee) {
          return handleResponse(res, false, null, "employee not found", 404);
        }
  
       
  
        await User.findByIdAndDelete(req.params.id);
  
        handleResponse(res, true, { message: "employee is deleted" });
      } catch (error) {
        console.error(error.message);
        handleResponse(res, false, null, "Server Error", 500);
      }
    }
  );
module.exports = router;
