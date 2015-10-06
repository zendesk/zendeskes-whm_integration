module.exports = {
	//Server functions
	//Check service status
	checkServiceStatus: function(){
        return{
          url: 'https://{{setting.server_domain}}:{{setting.server_port}}/json-api/servicestatus?api.version=1',
          headers: {
            'Authorization': 'WHM {{setting.server_username}}:{{setting.server_hash}}'
          },
          type: 'GET',
          secure:true
        };
    },
    //Restart an specific Service
    restartService: function(service){
        return{
          url: 'https://{{setting.server_domain}}:2087/json-api/restartservice?api.version=1&service='+service,
          headers: {
            'Authorization': 'WHM {{setting.server_username}}:{{setting.server_hash}}'
          },
          type: 'GET',
          secure:true
        };
    },
};