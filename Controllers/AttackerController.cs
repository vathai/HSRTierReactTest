using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace HSRTierReactTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AttackerController : ControllerBase
    {
        [HttpGet]
        //removing static and making public makes method visable
        public async Task<IEnumerable<Attacker>> GetAttackers([FromServices] IAttackerData data)
        {
            return await data.GetAttackers();
            /*try
            {
                return Results.Ok(await data.GetAttackers());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }*/
        }

        [HttpGet("{id:int}")]
        public async Task<Attacker?> GetAttacker(int id, [FromServices] IAttackerData data)
        {
            var results = await data.GetAttacker(id);
            if (results == null) return default;
            return results;
            /*try
            {
                var results = await data.GetAttacker(id);
                if (results == null) return Results.NotFound();
                return Results.Ok(results);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }*/
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
