<?php

namespace App\Schedule;
use App;
use App\Flat;
use App\FlatCost;

class NotificationsSchedule
{
    public function __invoke()
    {
        $flats = Flat::all();

        foreach ($flats as $flat) {

            FlatCost::create([
                'flat_id' => $flat->id,
                'cost' => $flat->cost,
                'date' => date('Y-m-d')
            ]);

        }
    }
}