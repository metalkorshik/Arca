<?php

namespace App\Policies;

use App\Timesheet;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TimesheetPolicy
{
    use HandlesAuthorization;

    const accessRoles = ['root', 'admin', 'main_accountant', 'accountant'];
    const managementRoles = ['accountant', 'admin', 'engineer', 'fold_manager', 'hs_specialis', 'main_accountant', 'planner', 'root', 'supply_manager'];
    const sundayConditions_Roles = ['adjuster', 'driver', 'electrician', 'engineer','insulators', 'planner', 'supply_manager', 'welder'];
    /* CAN SEE ONLY HIMSELF TIMESHEET */
    const ownRoles = ['engineer', 'fold_manager', 'hs_specialis'];


    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return in_array($user->role, self::accessRoles) ||
            in_array($user->role, self::ownRoles);
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Timesheet  $timesheet
     * @return mixed
     */
    public function view(User $user, Timesheet $timesheet)
    {
        $onContract = $timesheet->contract->staff()
            ->whereHas('user', function (Builder $query) use ($user) {
                $query->where('id', $user);
            })->count();

        return in_array($user->role, self::accessRoles) ||
            (in_array($user->role, self::ownRoles) && $onContract != 0);
    }

     /**
     * Determine whether the user can have special sunday conditions.
     *
     * @param  \App\User  $user
     * @param  \App\Timesheet  $timesheet
     * @return mixed
     */
    public function sunday_conditions(User $user, $worker, $date)
    {
        return in_array($worker->role, self::sundayConditions_Roles) && date('N', strtotime($date)) == 7;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Timesheet  $timesheet
     * @return mixed
     */
    public function update(User $user, Timesheet $timesheet)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Timesheet  $timesheet
     * @return mixed
     */
    public function delete(User $user, Timesheet $timesheet)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\Timesheet  $timesheet
     * @return mixed
     */
    public function restore(User $user, Timesheet $timesheet)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Timesheet  $timesheet
     * @return mixed
     */
    public function forceDelete(User $user, Timesheet $timesheet)
    {
        //
    }
}
