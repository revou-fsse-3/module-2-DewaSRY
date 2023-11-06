
/** 
 * 
 * @param {number} start
 * @param {number} end 
 * @param {number} step 
 * @returns {{
 * value:number,
 * done:boolean
 * }}
 *  
 * 
 */
export function range(start, end, step = 1) {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (start < end) {
                start += step;
                return{value:start, done:false}
            }
            return {
                value: end,
                done:true,
            }
        }

    }
}