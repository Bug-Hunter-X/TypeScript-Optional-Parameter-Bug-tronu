# TypeScript Optional Parameter Bug

This repository demonstrates a common issue encountered when working with optional parameters in TypeScript. The bug arises from the interaction of optional properties and type checking.

## Bug Description

The `printName` function accepts an object with a required `name` property and an optional `age` property.  When calling the function with an object that omits the `age` property, no error occurs, showcasing the correct behavior of optional parameters.

## Bug Solution

The solution addresses the bug by handling the optional property gracefully using optional chaining, ensuring that the code still functions even when the optional parameter is absent.  This approach is safer and prevents potential runtime errors when the optional parameter is null or undefined.