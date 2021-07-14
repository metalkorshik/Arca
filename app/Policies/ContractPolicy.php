<?php

namespace App\Policies;

use App\Contract;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Log;

class ContractPolicy
{
    use HandlesAuthorization;

    const accessRoles = ['root', 'admin', 'main_accountant'];
    const updateContract_accessRoles = ['root', 'admin', 'main_accountant', 'engineer'];
    const view_accessRoles = ['root', 'admin', 'main_accountant', 'accountant'];

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return in_array($user->role, self::view_accessRoles);
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Contract  $contract
     * @return mixed
     */
    public function view(User $user, Contract $contract)
    {
        //
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
     * @param  \App\Contract  $contract
     * @return mixed
     */
    public function update(User $user, Contract $contract)
    {
        return in_array($user->role, self::updateContract_accessRoles) && $contract->status != Contract::CLOSE;
    }

    public function full_update(User $user, Contract $contract)
    {
        return in_array($user->role, self::view_accessRoles) && $contract->status != Contract::CLOSE;
    }

    public function staff_update(User $user, Contract $contract)
    {
        return in_array($user->role, self::updateContract_accessRoles) && $contract->status != Contract::CLOSE;
    }

    public function confirm(User $user)
    {
        return in_array($user->role, self::accessRoles);
    }

    public function open(User $user)
    {
        return in_array($user->role, self::accessRoles);
    }

    public function access(User $user)
    {
        return in_array($user->role, self::accessRoles);
    }

    public function close(User $user, Contract $contract)
    {
        return in_array($user->role, self::accessRoles) && $contract->status == Contract::ACTIVE;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Contract  $contract
     * @return mixed
     */
    public function delete(User $user, Contract $contract)
    {
        return in_array($user->role, self::accessRoles) && $contract->status != Contract::ACTIVE;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\Contract  $contract
     * @return mixed
     */
    public function restore(User $user, Contract $contract)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Contract  $contract
     * @return mixed
     */
    public function forceDelete(User $user, Contract $contract)
    {
        //
    }
}
