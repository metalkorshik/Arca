<?php

namespace App\Policies;

use App\ContractCost;
use App\Contract;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ContractCostPolicy
{
    use HandlesAuthorization;

    const accessRoles = ['root', 'admin', 'main_accountant', 'accountant'];

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
     * @param  \App\ContractCost  $contractCost
     * @return mixed
     */
    public function view(User $user, ContractCost $contractCost)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user, Contract $contract)
    {
        return in_array($user->role, self::accessRoles) && $contract->status != Contract::CLOSE;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\ContractCost  $contractCost
     * @return mixed
     */
    public function update(User $user, ContractCost $contractCost)
    {
        return in_array($user->role, self::accessRoles);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\ContractCost  $contractCost
     * @return mixed
     */
    public function delete(User $user, ContractCost $contractCost)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\ContractCost  $contractCost
     * @return mixed
     */
    public function restore(User $user, ContractCost $contractCost)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\ContractCost  $contractCost
     * @return mixed
     */
    public function forceDelete(User $user, ContractCost $contractCost)
    {
        //
    }
}
