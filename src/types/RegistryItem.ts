/**
 * Creates a single registry value record.
 * This contructor is private. Objects of this type are created internally and returned by methods of {@link Registry} objects.
 *
 * @private
 * @class
 *
 * @param {string} host - the hostname
 * @param {string} hive - the hive id
 * @param {string} key - the registry key
 * @param {string} name - the value name
 * @param {string} type - the value type
 * @param {string} value - the value
 * @param {string} arch - the hive architecture ('x86' or 'x64')
 *
 */
export default interface RegistryItem {
	/* private members */
	readonly host: string    // hostname
	readonly hive: string;     // registry hive
	readonly key: string     // registry key
	readonly name: string    // property name
	readonly type: string;  // property type
	readonly value: string   // property value
	readonly arch: string    // hive architecture
}