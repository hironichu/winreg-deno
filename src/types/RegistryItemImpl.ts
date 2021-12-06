
import RegistryItem from '../types/RegistryItem.ts'

class RegistryItemImpl implements RegistryItem {
	constructor(private _host: string, private _hive: string, private _key: string, private _name: string, private _type: string, private _value: string, private _arch: string) {}

	/* getters/setters */

	/**
	 * The hostname.
	 * @readonly
	 * @member {string} RegistryItem#host
	 */
	get host(): string {
		return this._host;
	}

	/**
	 * The hive id.
	 * @readonly
	 * @member {string} RegistryItem#hive
	 */
	get hive(): string {
		return this._hive;
	}

	/**
	 * The registry key.
	 * @readonly
	 * @member {string} RegistryItem#key
	 */
	get key(): string {
		return this._key;
	}

	/**
	 * The value name.
	 * @readonly
	 * @member {string} RegistryItem#name
	 */
	get name(): string {
		return this._name;
	}

	/**
	 * The value type.
	 * @readonly
	 * @member {string} RegistryItem#type
	 */
	get type(): string {
		return this._type;
	}

	/**
	 * The value.
	 * @readonly
	 * @member {string} RegistryItem#value
	 */
	get value(): string {
		return this._value;
	}

	/**
	 * The hive architecture.
	 * @readonly
	 * @member {string} RegistryItem#arch
	 */
	get arch(): string {
		return this._arch;
	}
}

export {
	RegistryItemImpl
}