function minDeletionSize(strs: string[]): number {
    const columnCount: number = strs[0].length;
    const rowCount: number = strs.length;

    let columnsToDelete: number = 0;

    for (let columnIndex=0; columnIndex<columnCount; columnIndex++){
        for(let rowIndex=1; rowIndex<rowCount; rowIndex++){
            if (strs[rowIndex][columnIndex]< strs[rowIndex-1][columnIndex]){
                columnsToDelete++;
                break;
            }
        }
    }
    return columnsToDelete;
};