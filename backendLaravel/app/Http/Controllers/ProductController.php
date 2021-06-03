<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Product;

class ProductController extends Controller
{

    public function createProduct(Request $request)
    {
        $product = new Product;
        $product->name= $request->name;
        $product->details = $request->details;
        $product->image = $request->image;
        $product->price = $request->price;
        $product->save();
        return response()->json($product);
    }

    public function getAll(){
        $product = Product::all();
        return response()->json($product);
    }
    public function getOneProduct($id){
        $product = Product::find($id);
        return response()->json($product);
    }

    public function updateProduct(Request $request, $id){
        $product = Product::find($id);
        $product->name = $request->input('name');
        $product->details = $request->input('details');
        $product->image = $request->input('image');
        $product->price = $request->input('price');
        $product->save();
        return response()->json($product);
    }

    public function deleteProduct($id){
        $product = Product::find($id);
        $product->delete();
        return response()->json('product remove !');
    }
}
