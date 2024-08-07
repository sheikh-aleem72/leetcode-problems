/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    const n = formula.length;
        const stack = [new Map()];
        let index = 0;

        while (index < n) {
            const ch = formula.charAt(index);
            if (ch === '(') {
                stack.push(new Map());
                index++;
            } else if (ch === ')') {
                const curMap = stack.pop();
                index++; // move to the next char
                // find the multiplier
                let multiplier = "";
                while (index < n && /\d/.test(formula.charAt(index))) {
                    multiplier += formula.charAt(index);
                    index++;
                }
                // multiply the count - ()n
                if (multiplier.length > 0) {
                    const m = parseInt(multiplier);
                    for (const [atom, count] of curMap.entries()) {
                        curMap.set(atom, count * m);
                    }
                }
                // insert popped map elements into stack top
                for (const [atom, count] of curMap.entries()) {
                    const topMap = stack[stack.length - 1];
                    topMap.set(atom, (topMap.get(atom) || 0) + count);
                }
            } else { // Atom name and count
                // take the uppercase letter 
                let atomName = ch;
                index++;
                // collect all lowercase letters
                while (index < n && /[a-z]/.test(formula.charAt(index))) {
                    atomName += formula.charAt(index);
                    index++;
                }
                let count = "";
                while (index < n && /\d/.test(formula.charAt(index))) {
                    count += formula.charAt(index);
                    index++;
                }
                const c = count.length > 0 ? parseInt(count) : 1;
                const topMap = stack[stack.length - 1];
                topMap.set(atomName, (topMap.get(atomName) || 0) + c);
            }
        }

        const sortedMap = new Map([...stack[0]].sort());
        let res = "";
        for (const [atom, count] of sortedMap.entries()) {
            res += atom;
            if (count > 1) {
                res += count;
            }
        }
        return res;

};