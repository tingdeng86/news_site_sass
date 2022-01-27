function formatTitle(title){
    if(title){
        let separators = [' - ', ' \\| '];
        let newArray = title.split(new RegExp(separators.join('|'), 'g'));
        let remove = newArray[newArray.length - 1]

        let formattedTitle = title.slice(0, -(remove.length + 3))
        return formattedTitle
    }
    
}

function getYear(){
    const d = new Date()
    return d.getFullYear()
}

export {formatTitle, getYear}