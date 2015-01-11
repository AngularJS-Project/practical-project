app.factory('filter', function(){
    
    var filterParms = {};
    
    function filterByCategory(category){
        filterParms.categoryId = category.id;
    }
    
    function filterByTown(town){
        filterParms.townId = town.id;

    }
    
    function getFilterParms() {
        return filterParms;
    }
    
    return{
        filterByCategory: filterByCategory,
        filterByTown: filterByTown,
        getFilterParms: getFilterParms
    }
     
});