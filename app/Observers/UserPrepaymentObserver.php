<?php

namespace App\Observers;

use App\UserPrepayment;
use App\PrepaymentHistory;

class UserPrepaymentObserver
{
    /**
     * Handle the user prepayment "created" event.
     *
     * @param  \App\UserPrepayment  $userPrepayment
     * @return void
     */
    public function created(UserPrepayment $userPrepayment)
    {
        //
    }

    /**
     * Handle the user prepayment "updated" event.
     *
     * @param  \App\UserPrepayment  $userPrepayment
     * @return void
     */
    public function updated(UserPrepayment $userPrepayment)
    {
        if ($userPrepayment->value != $userPrepayment->getOriginal('value')) {
            $history = new PrepaymentHistory(['value' => $userPrepayment->value]);
            $history->user()->associate($userPrepayment->user);
            $history->author()->associate(\Auth::user());
            $history->save();
        }
    }

    /**
     * Handle the user prepayment "deleted" event.
     *
     * @param  \App\UserPrepayment  $userPrepayment
     * @return void
     */
    public function deleted(UserPrepayment $userPrepayment)
    {
        //
    }

    /**
     * Handle the user prepayment "restored" event.
     *
     * @param  \App\UserPrepayment  $userPrepayment
     * @return void
     */
    public function restored(UserPrepayment $userPrepayment)
    {
        //
    }

    /**
     * Handle the user prepayment "force deleted" event.
     *
     * @param  \App\UserPrepayment  $userPrepayment
     * @return void
     */
    public function forceDeleted(UserPrepayment $userPrepayment)
    {
        //
    }
}
