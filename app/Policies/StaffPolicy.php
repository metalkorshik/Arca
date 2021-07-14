<?php

namespace App\Policies;

use App\Staff;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StaffPolicy
{
    use HandlesAuthorization;

    const adminRoles = ['root', 'admin', 'main_accountant'];
    const managementRoles = ['accountant', 'admin', 'engineer', 'fold_manager', 'hs_specialis', 'main_accountant', 'planner', 'root', 'supply_manager'];
    const accessRoles = ['root', 'admin', 'main_accountant', 'hs_specialis'];
    const viewDetail_accessRoles = ['root', 'admin', 'main_accountant', 'engineer', 'accountant', 'hs_specialis'];

    const viewDetail_showRate = [
        'root' => [ 'accountant', 'adjuster', 'admin', 'driver', 'electrician', 'engineer', 'fold_manager', 'hs_specialis', 'insulators', 'main_accountant', 'planner', 'root', 'supply_manager', 'welder' ], 
        'admin' => [ 'accountant', 'adjuster', 'admin', 'driver', 'electrician', 'engineer', 'fold_manager', 'hs_specialis', 'insulators', 'main_accountant', 'planner', 'root', 'supply_manager', 'welder' ], 
        'main_accountant' => [ 'accountant', 'adjuster', 'admin', 'driver', 'electrician', 'engineer', 'fold_manager', 'hs_specialis', 'insulators', 'main_accountant', 'planner', 'root', 'supply_manager', 'welder' ], 
        'accountant' => [ 'accountant', 'adjuster', 'admin', 'driver', 'electrician', 'engineer', 'fold_manager', 'hs_specialis', 'insulators', 'main_accountant', 'planner', 'root', 'supply_manager', 'welder' ], 
        'engineer' => [ 'welder', 'adjuster', 'electrician', 'insulators' ], 
        'planner' => [], 
        'fold_manager' => [ 'welder', 'adjuster', 'electrician', 'insulators' ], 
        'supply_manager' => [ 'welder', 'adjuster', 'electrician', 'insulators' ], 
        'hs_specialis' => [],
        'driver' => [], 
        'welder' => [],
        'adjuster' => [],
        'electrician' => [],
        'insulators' => [],
    ];

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Staff  $staff
     * @return mixed
     */
    public function view(User $user, User $staff)
    {

    }

    public function view_info(User $user, User $staff)
    {
        return in_array($user->role, self::viewDetail_accessRoles) && $staff->role != 'root';
    }

    public function view_calendar(User $user, User $staff)
    {
        return in_array($user->role, self::viewDetail_accessRoles) && $staff->role != 'root';
    }

    public function view_another(User $user, User $staff)
    {
        return in_array($user->role, self::viewDetail_accessRoles) && $staff->role != 'root';
    }

    public function view_rate(User $user, User $staff)
    {
        return in_array($staff->role, self::viewDetail_showRate[$user->role]) || $user->id == $staff->id;
    }

    public function view_documents(User $user)
    {
        return in_array($user->role, self::managementRoles);
    }

    public function edit_documents(User $user)
    {
        return in_array($user->role, self::accessRoles);
    }

    public function change_password(User $user)
    {
        return in_array($user->role, self::adminRoles);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return in_array($user->role, self::accessRoles);
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Staff  $staff
     * @return mixed
     */
    public function update(User $user, User $staff)
    {
        return in_array($user->role, self::accessRoles);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Staff  $staff
     * @return mixed
     */
    public function delete(User $user)
    {
        return in_array($user->role, self::accessRoles);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\Staff  $staff
     * @return mixed
     */
    public function restore(User $user, Staff $staff)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Staff  $staff
     * @return mixed
     */
    public function forceDelete(User $user, Staff $staff)
    {
        //
    }
}
