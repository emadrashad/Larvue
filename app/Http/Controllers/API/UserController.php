<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User ; 
class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::latest()->paginate(10); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // serverside validation  
        $this->validate($request , [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|max:255'
        ]); 

        return User::create([

            'name' => $request->name , 
            'email' => $request->email , 
            'password' => crypt($request->name,'') , 
            'type' => $request->type , 
            'bio' => $request->bio , 
            'photo' => $request->photo , 
             

        ]); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id) ; 
        
        // adding sometimes validation rule to validate password if it present -_- 
        $this->validate($request , [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'password' => 'sometimes|required|string|min:6|max:255'
        ]);

        $user->id = $id ; 
        $user->name = $request->name ;
        $user->email = $request->email ;
        $user->password = isset($request->password) ? crypt($request->password , '') : $user->password ;
        $user->type = $request->type ;
        $user->bio = $request->bio ;

        $user->save(); 
        
        
        return ['message' => 'User Updated Successfully']  ; 
     }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id) ; 

        // delete  
        $user->delete();
        // return response 
        return ['message' => 'user deleted']; 
    }
}
