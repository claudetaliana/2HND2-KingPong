#pragma strict
//a rigid body that links to the sphere prefab
//Red Sphere
var redsphere:Rigidbody;
//Green Sphere
var greensphere:Rigidbody;
//Blue Sphere
var bluesphere:Rigidbody;
//Yellow Sphere
var yellowsphere:Rigidbody;

function generatesphere(){
	//create a random number from 1 to 4
	var colornumber:int;
	
	colornumber = Random.Range(1,5);
	
	Debug.Log(colornumber);
	
	//create a random number for the position
	var xposition:float;
	
	xposition = Random.Range(-2.5f, 2.5f);
	
	Debug.Log(xposition);
	
	switch(colornumber)
	{
		case 1:
				Instantiate(redsphere,Vector3(xposition,5,0),Quaternion.identity);
				break;
		case 2:
				Instantiate(greensphere,Vector3(xposition,5,0),Quaternion.identity);
				break;
		case 3:
				Instantiate(bluesphere,Vector3(xposition,5,0),Quaternion.identity);
				break;
		case 4:
				Instantiate(yellowsphere,Vector3(xposition,5,0),Quaternion.identity);
				break;		
	}
}


function Start () {
	//run the generate sphere method. first parameter is the startup delay, and the 
	//second parameter is how often it will run
	InvokeRepeating("generatesphere",1.0,1.0);
}

function Update () {

}