<?php

namespace App\Policies;

use App\Settings;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SettingsPolicy
{
    use HandlesAuthorization;

    const accessRoles = ['root', 'admin', 'main_accountant'];

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return in_array($user->role, self::accessRoles);
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Settings  $settings
     * @return mixed
     */
    public function view(User $user, Settings $settings)
    {
        return in_array($user->role, self::accessRoles);
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
     * @param  \App\Settings  $settings
     * @return mixed
     */
    public function update(User $user, Settings $settings)
    {
        return in_array($user->role, self::accessRoles);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Settings  $settings
     * @return mixed
     */
    public function delete(User $user, Settings $settings)
    {
        return in_array($user->role, self::accessRoles);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\Settings  $settings
     * @return mixed
     */
    public function restore(User $user, Settings $settings)
    {
        return in_array($user->role, self::accessRoles);
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Settings  $settings
     * @return mixed
     */
    public function forceDelete(User $user, Settings $settings)
    {
        return in_array($user->role, self::accessRoles);
    }
}
