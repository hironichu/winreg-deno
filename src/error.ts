/**
 * Creates an Error object that contains the exit code of the REG.EXE process.
 * This contructor is private. Objects of this type are created internally and returned in the <code>err</code> parameters in case the REG.EXE process doesn't exit cleanly.
 *
 * @private
 * @class
 *
 * @param {string} message - the error message
 * @param {number} code - the process exit code
 *
 */
export default class ProcessUncleanExitError extends Error {
	private _code: number;
	constructor(message: string, code: number) {
	  super(message);
	  this._code = code;

	  Object.setPrototypeOf(this, ProcessUncleanExitError.prototype);
	  Error.captureStackTrace(this, this.constructor); // after initialize properties
	}
	// /**
	//  * The error name.
	//  * @readonly
	//  * @member {string} ProcessUncleanExitError#name
	//  */
	//   get name() { 
	//     return this.name; 
	//   }
	/**
	 * The process exit code.
	 * @readonly
	 * @member {number} ProcessUncleanExitError#code
	 */
	get code() { 
		return this._code; 
	}
}