<?php

use App\Http\Controllers\TimeLogApiController;
use Illuminate\Support\Facades\Route;


// All api routes start with /api/
Route::prefix('api')->group(function () {

    // Protected api routes
    Route::middleware(['auth'])->group(function () {
        Route::get('/time-log', [TimeLogApiController::class, 'index']);
    });
});
