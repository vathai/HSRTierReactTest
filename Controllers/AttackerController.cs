﻿using Microsoft.AspNetCore.Mvc;
using DamageCalcLibrary.Models;
using DamageCalcLibrary.Data;

namespace HSRTierReactTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AttackerController : Controller
    {
        private static async Task<IResult> GetAttackers(IAttackerData data)
        {
            try
            {
                return Results.Ok(await data.GetAttackers());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
        private static async Task<IResult> GetAttacker(int id, IAttackerData data)
        {
            try
            {
                var results = await data.GetAttacker(id);
                if (results == null) return Results.NotFound();
                return Results.Ok(results);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> InsertAttacker(Attacker attacker, IAttackerData data)
        {
            try
            {
                await data.InsertAttacker(attacker);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> UpdateAttacker(Attacker attacker, IAttackerData data)
        {
            try
            {
                await data.UpdateAttacker(attacker);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
        private static async Task<IResult> DeleteAttacker(int id, IAttackerData data)
        {
            try
            {
                await data.DeleteAttacker(id);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
    }
}
